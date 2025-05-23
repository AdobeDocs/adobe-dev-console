# Service Account (JWT) Authentication

<InlineAlert slots="text"/>

The Service Account (JWT) credentials have been deprecated in favor of the OAuth Server-to-Server credentials. Your applications using the Service Account (JWT) credentials will stop working after Jun 30, 2025. You must migrate to the new credential by **Jun 30, 2025**, to ensure your application continues functioning. [Learn more](../ServerToServerAuthentication/migration.md).

To establish a secure service-to-service Adobe I/O API session, you must create a JSON Web Token (JWT) that encapsulates the identity of your integration, and then exchange it for an access token. Every request to an Adobe service must include the access token in the `Authorization` header, along with the API Key (Client ID) that was generated when you created the [Service Account Integration](../service-account-integration.md) in the [Adobe Developer Console](https://developer.adobe.com/console/).

## Authentication Workflow

## Creating a JSON Web Token

A JSON Web Token for Service Account authentication requires a particular set of claims, and must be signed using a valid digital signing certificate. We recommend that you use one of the publicly available libraries or tools for building your JWT. Examples are provided for some popular languages.

### Required Claims for a Service Account JWT

Your JWT must contain the following claims:

| Claim      | Description|
|---|---|
| exp        | _Required_. The expiration parameter is a required parameter measuring the absolute time since 01/01/1970 GMT. You must ensure that the expiration time is later than the time of issue. After this time, the JWT is no longer valid. **Recommendation**: Have a very short lived token (a few minutes) - such that it expires soon after it has been exchanged for an IMS access token. Every time a new access token is required, one such JWT is signed and exchanged. This is secure approach. Longer lived tokens that are re-used to obtain access tokens as needed are not recommended. |
| iss        | _Required_. The issuer, your **Organization ID** from the Adobe Developer Console integration, in the format `org_ident@AdobeOrg`. Identifies your organization that has been configured for access to the Adobe I/O API.|
| sub        | _Required_. The subject, your **Technical Account ID** from the Adobe Developer Console integration, in the format: `id@techacct.adobe.com`.|
| aud        | _Required_. The audience for the token, your **API Key** from the Adobe Developer Console integration, in the format: `https://ims-na1.adobelogin.com/c/api_key`.|
| Metascopes | _Required_. The API-access claim configured for your organization: [JWT Metascopes](scopes.md), in the format: `"https://ims-na1.adobelogin.com/s/meta_scope": true`|

The following is a sample payload to be signed and encoded.

```json
{
  "exp": 1550001438,
  "iss": "C74F69D7594880280.....@AdobeOrg",
  "sub": "6657031C5C095BB40A4.....@techacct.adobe.com",
  "https://ims-na1.adobelogin.com/s/ent_dataservices_sdk": true,
  "aud": "https://ims-na1.adobelogin.com/c/a64f5f10849a410a97ffdac8ae1....."
}
```

### Sign and Encode your JWT

The JWT must be signed and base-64 encoded for inclusion in the access request. The JWT libraries provide functions to perform these tasks.

- The token must be signed using the private key for a digital signing certificate that is associated with your API key. You can associate more than one certificate with an API key. If you do so, you can use the private key of any associated certificate to sign your JWT. For more information about private key/public certificate, see [Create a public key certificate](./jwt-certificate.md#using-the-public-key-certificate-for-service-account-integration).

**Algorithm**: **RS256** (RSA Signature with SHA-256) is an asymmetric algorithm, and it uses a public/private key pair: the identity provider has a private (secret) key used to generate the signature, and the consumer of the JWT (i.e. Adobe Developer Console) gets a public key to validate the signature.

### Using JWT Libraries and Creation Tools

Most modern languages have JWT libraries available. We recommend you use one of these libraries (or other JWT-compatible libraries) before trying to hand-craft the JWT.

Other JWT tools are publicly available, such as the [JWT.IO](https://jwt.io/), a handy web-based encoder/decoder for JWTs.

Examples are provided for several popular languages.

| Language | Library                     |
| -------- | --------------------------- |
| Java     | `atlassian-jwt` `jsontoken` |
| Node.js  | `jsonwebtoken`              |
| Python   | `pyjwt`                     |

### Additional JWT Libraries and Creation Tools

The following JWT libraries are available, in addition to the Java, Node.js, and Python libraries for which we have provided examples.

| Language | Library                             |
| -------- | ----------------------------------- |
| Ruby     | `ruby-jwt`                          |
| PHP      | `firebase php-jwt` `luciferous jwt` |
| .NET     | `jwt`                               |
| Haskell  | `haskell-jwt`                       |

## Exchanging JWT to retrieve an access token

To initiate an API session, use the JWT to obtain an access token from Adobe by making a POST request to Adobe Identity Management Service (IMS).

- Send a POST request to:

`https://ims-na1.adobelogin.com/ims/exchange/jwt`

- The body of the request should contain URL-encoded parameters with your Client ID (API Key), Client Secret, and JWT:

`client_id={api_key_value}&client_secret={client_secret_value}&jwt_token={base64_encoded_JWT}`

### Request parameters

Pass URL-encoded parameters in the body of your POST request:

| Parameter     | Description                                                                                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| client_id     | The API key generated for your integration.                                                                                                                                              |
| client_secret | The client secret generated for your integration.                                                                                                                                        |
| jwt_token     | A base-64 encoded JSON Web Token that encapsulates the identity of your integration, signed with a private key that corresponds to a public key certificate attached to the integration. |

### Responses

When a request has been understood and at least partially completed, it returns with HTTP status 200. On success, the response contains a valid access token. Pass this token in the Authorization header in all subsequent requests to an Adobe service.

A failed request can result in a response with an HTTP status of 400 or 401 and one of the following error messages in the response body:

|Response|Description|
|--- |--- |
|400 invalid_client|Integration does not exist. This applies both to the client_id parameter and the aud in the JWT. The client_id parameter and the aud field in the JWT do not match.|
|401 invalid_client|Integration does not have the exchange_jwt scope. This indicates an improper client configuration. Contact the Adobe I/O team to resolve it. The client ID and client secret combination is invalid.|
|400 invalid_token|JWT is missing or cannot be decoded. JWT has expired. In this case, the error_description contains more details. The exp or jti field of the JWT is not an integer.|
|400 invalid_signature|The JWT signature does not match any certificates attached to the integration. The signature does not match the algorithm specified in the JWT header.|
|400 invalid_scope|Indicates a problem with the requested scope for the token. Specific scope problems can be:Metascopes in the JWT do not match metascopes in the binding.Metascopes in the JWT do not match target client scopes.Metascopes in the JWT contain a scope or scopes that do not exist.The JWT has no metascopes.|
|400 bad_request|The JWT payload can be decoded and decrypted, but its contents are incorrect. This can occur when values for fields such as sub, iss, exp, or jti are not in the proper format.|


### Example

```
========================= REQUEST ==========================
POST https://ims-na1.adobelogin.com/ims/exchange/jwt
-------------------------- body ----------------------------
client_id={myClientId}&client_secret={myClientSecret}&jwt_token={myJSONWebToken}
------------------------- headers --------------------------
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache
```
