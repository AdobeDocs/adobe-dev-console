# Code samples to verify the redirect

The following guide contains code samples in NodeJS, Python, and Java that can be used to verify the parameters in the redirect. 

<InlineAlert slots="text"/>

All the examples below assume that the user's session ID is stored in browser cookies. So when Adobe IMS redirects back to the partner app, the backend server of the partner app receives a HTTP request with the cookies from the user's browser and therefore knows the user's session ID.

+ [NodeJS](#nodejs)
  + [Install the required packages](#install-the-required-packages)
  + [Verify the redirect](#verify-the-redirect)
+ [Python](#python)
  + [Install the required packages](#install-the-required-packages-1)
  + [Verify the redirect](#verify-the-redirect-1)
+ [Java](#java)
  + [Add these dependencies to your pom.xml](#add-these-dependencies-to-your-pomxml)
  + [Verify the redirect](#verify-the-redirect-2)


## NodeJS

### Install the required packages
```bash
npm install jsonwebtoken axios jose
```

### Verify the redirect

```js
const axios = require('axios');
const jwt = require('jsonwebtoken');
const { importJWK } = require('jose');

/**
 * Verifies:
 * 1. session.state === state
 * 2. id token is valid
 * 3. session.nonce === payload.nonce
 * 
 * Returns org_id from token if valid
 * 
 * @param {string} idToken - The id_token from the redirect
 * @param {object} session - Contains expected `state` and `nonce`
 * @param {string} state - State from the redirect
 * @returns {Promise<string>} - org_id claim from the id_token
 */
async function verifyRedirect(idToken, session, state) {
  // Step 1: State check
  if (session.state !== state) {
    throw new Error('State mismatch');
  }

  // Step 2: Decode header to get kid
  const decodedHeader = jwt.decode(idToken, { complete: true });
  if (!decodedHeader?.header?.kid) {
    throw new Error('Invalid id token: missing kid');
  }

  const kid = decodedHeader.header.kid;

  // Step 3: Fetch JWKS and get matching key
  const keys = await fetchAdobeKeys();
  const jwk = keys.find(k => k.kid === kid);
  if (!jwk) {
    throw new Error(`No matching JWK found for kid: ${kid}`);
  }

  // Step 4: Convert to public key
  const publicKey = await getPublicKeyFromJwk(jwk);

  // Step 5: Verify id token signature
  const payload = jwt.verify(idToken, publicKey, {
    algorithms: ['RS256'],
  });

  // Step 6: Nonce check
  if (session.nonce !== payload.nonce) {
    throw new Error('Nonce mismatch');
  }

  // Step 7: Return org_id
  if (!payload.org_id) {
    throw new Error('org_id claim missing in id_token');
  }

  return payload.org_id;
}

/**
 * Fetch Adobe IMS public keys (JWKS)
 */
async function fetchAdobeKeys() {
  const response = await axios.get('https://ims-na1.adobelogin.com/ims/keys');
  return response.data.keys;
}

/**
 * Convert JWK to a usable public key
 */
async function getPublicKeyFromJwk(jwk) {
  return await importJWK(jwk, jwk.alg);
}

// Example usage
(async () => {
  const idToken = 'your.id.token.here';
  const session = {
    state: 'xyz123',
    nonce: 'abc456'
  };
  const state = 'xyz123';

  try {
    const orgId = await verifyRedirect(idToken, session, state);
    console.log('Verified org_id:', orgId);
  } catch (err) {
    console.error('Redirect verification failed:', err.message);
  }
})();

```

## Python

### Install the required packages
```bash
pip install pyjwt requests cryptography
```

### Verify the redirect

```python
import requests
import jwt
from jwt import PyJWKClient

ADOBE_JWKS_URL = "https://ims-na1.adobelogin.com/ims/keys"

def verify_redirect(id_token: str, session: dict, state: str) -> str:
    """
    Verifies:
    1. session.state == state
    2. id token is valid via Adobe public keys
    3. session.nonce == token's nonce
    4. Returns org_id from the token if all checks pass

    :param id_token: The id_token returned from the redirect
    :param session: Dict with 'state' and 'nonce' keys
    :param state: The 'state' query parameter from redirect
    :return: org_id claim from the id_token
    :raises RedirectVerificationError: on any failure
    """

    # Step 1: Check state
    if session.get('state') != state:
        raise RedirectVerificationError("State mismatch")

    # Step 2: Load signing key using PyJWKClient
    try:
        jwk_client = PyJWKClient(ADOBE_JWKS_URL)
        signing_key = jwk_client.get_signing_key_from_jwt(id_token)
    except Exception as e:
        raise RedirectVerificationError(f"JWK retrieval/lookup failed: {e}")

    # Step 3: Verify id_token signature
    try:
        decoded = jwt.decode(
            id_token,
            signing_key.key,
            algorithms=["RS256"]
        )
    except jwt.PyJWTError as e:
        raise RedirectVerificationError(f"id token verification failed: {e}")

    # Step 4: Nonce check
    if session.get('nonce') != decoded.get('nonce'):
        raise RedirectVerificationError("Nonce mismatch")

    # Step 5: Return org_id
    org_id = decoded.get('org_id')
    if not org_id:
        raise RedirectVerificationError("org_id claim missing in token")

    return org_id

class RedirectVerificationError(Exception):
    pass

# Example usage
if __name__ == "__main__":
    id_token = "your.id.token.here"
    session = {
        "state": "xyz123",
        "nonce": "abc456"
    }
    state = "xyz123"

    try:
        org_id = verify_redirect(id_token, session, state)
        print("Verified org_id:", org_id)
    except RedirectVerificationError as e:
        print("Redirect verification failed:", e)

```

## Java

### Add these dependencies to your pom.xml

### Verify the redirect

```java
import com.auth0.jwk.Jwk;
import com.auth0.jwk.JwkProvider;
import com.auth0.jwk.UrlJwkProvider;
import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;

import java.net.URL;
import java.security.interfaces.RSAPublicKey;
import java.util.Map;

public class VerifyRedirect {

    private static final String JWKS_URL = "https://ims-na1.adobelogin.com/ims/keys";

    /**
     * Verifies that:
     * 1. session.state equals the redirect state
     * 2. The JWT is valid using Adobe's public key
     * 3. session.nonce matches the nonce in the JWT
     * 
     * @param idToken The id token from the redirect URL
     * @param session Map containing "state" and "nonce"
     * @param state The state parameter from the redirect URL
     * @return The org_id claim if verification succeeds
     * @throws Exception if verification fails
     */
    public static String verifyRedirect(String idToken, Map<String, String> session, String state) throws Exception {
        // Step 1: Check state
        if (!state.equals(session.get("state"))) {
            throw new Exception("State mismatch");
        }

        // Step 2: Decode id token to get the kid
        DecodedJWT decodedJWT = JWT.decode(idToken);
        String kid = decodedJWT.getKeyId();

        // Step 3: Get the JWK matching the kid
        JwkProvider provider = new UrlJwkProvider(new URL(JWKS_URL));
        Jwk jwk = provider.get(kid);
        RSAPublicKey publicKey = (RSAPublicKey) jwk.getPublicKey();

        // Step 4: Validate the id token
        Algorithm algorithm = Algorithm.RSA256(publicKey, null);
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT verifiedJwt = verifier.verify(idToken);

        // Step 5: Check nonce
        String tokenNonce = verifiedJwt.getClaim("nonce").asString();
        if (!session.get("nonce").equals(tokenNonce)) {
            throw new Exception("Nonce mismatch");
        }

        // Step 6: Return org_id
        String orgId = verifiedJwt.getClaim("org_id").asString();
        if (orgId == null || orgId.isEmpty()) {
            throw new Exception("org_id claim missing in token");
        }

        return orgId;
    }

    // Example usage
    public static void main(String[] args) {
        String idToken = "your.jwt.token.here";
        Map<String, String> session = Map.of(
            "state", "xyz123",
            "nonce", "abc456"
        );
        String state = "xyz123";

        try {
            String orgId = verifyRedirect(idToken, session, state);
            System.out.println("Verified org_id: " + orgId);
        } catch (Exception e) {
            System.err.println("Redirect verification failed: " + e.getMessage());
        }
    }
}

```