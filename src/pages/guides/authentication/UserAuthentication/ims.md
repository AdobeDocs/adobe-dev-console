# User Authentication Credentials API Reference

Following is an API reference for Adobe Identity Management Services (IMS) APIs.

On this page:
+ [OpenID Configuration](#openid-configuration)
+ [ID Token Keys](#id-token-keys)
+ [UserInfo](#userinfo)
+ [Authorize Request](#authorize-request)
+ [Fetching Access tokens](#fetching-access-tokens)
+ [Refreshing Access tokens](#refreshing-access-tokens)
+ [Token revocation](#token-revocation)
+ [Scopes](#scopes)

## OpenID Configuration

This API allows you to view information about Adobe's OpenID configuration.

### Request

```curl
curl -X GET 'https://ims-na1.adobelogin.com/ims/.well-known/openid-configuration'
```

### Sample Response

```json
{
    "issuer": "https://ims-na1.adobelogin.com",
    "authorization_endpoint": "https://ims-na1.adobelogin.com/ims/authorize/v2",
    "token_endpoint": "https://ims-na1.adobelogin.com/ims/token/v3",
    "userinfo_endpoint": "https://ims-na1.adobelogin.com/ims/userinfo/v2",
    "revocation_endpoint": "https://ims-na1.adobelogin.com/ims/revoke",
    "jwks_uri": "https://ims-na1.adobelogin.com/ims/keys",
    "response_types_supported": [
        "code",
        "token",
        "id_token",
        "id_token token",
        "code id_token"
    ],
    "subject_types_supported": [
        "public"
    ],
    "id_token_signing_alg_values_supported": [
        "RS256"
    ],
    "scopes_supported": [
        "openid",
        "email",
        "profile"
    ],
    "token_endpoint_auth_methods_supported": [
        "client_secret_basic",
        "client_secret_post"
    ],
    "claims_supported": [
        "sub",
        "given_name",
        "family_name",
        "name",
        "email",
        "email_verified",
        "address"
    ],
    "grant_types_supported": [
        "authorization_code",
        "implicit_grant",
        "refresh_token"
    ]
}
```

## ID Token Keys

This API allows you to retrieve the keys with which the ID Tokens are signed.

### Request

```curl
curl -X GET 'https://ims-na1.adobelogin.com/ims/keys'
```

### Sample Response

```json
{
    "keys": [
        {
            "alg": "RS256",
            "kty": "RSA",
            "use": "sig",
            "kid": "ims",
            "e": "AQAB",
            "n": "gBI3r_iauYJrKOTpEsFLeQ4TFktfzmNa30BK_84uh8mZ9N1NJ8VjOlwH9SzPD_gIpELaAaf2n7GeKN8kWYGtex6uCmz5iZZ3eDzryvTfvj3MwQx_XbGloz4QKQXSlCwADlOXP3-EhMqOVr3tVqQe0uX_TPn1F_b9yIONXAX1GwWTFb9UqNjjpFNOxuKJaAh6uod7Y9kmzw0GE4GvMs6AIjitxLNLlpeC8J3vyA0l4UWVJR9lwLjS1O0Lk07IfjAMMes6fonQ5AtzYewIOk4UdNCgb_XKpqLgYY_9J9nfIuBGVY-W7ZfHhXjA1AixQw6A4XoreGr5AnF5WMwd6DA7vw"
        },
        {
            "alg": "RS256",
            "kty": "RSA",
            "use": "sig",
            "kid": "ims_na1-key-1",
            "e": "AQAB",
            "n": "q2y0X2R0db3z6yUHWjnd3qppszntWcoel3WURBYekEcadjfxDFAWrAHX8OoceddD6n-qC_2b2GVJny45qKmhq8KFvVOUCMgUUY_ErnvrZXQl0r3USDpf5rxNOQuqxBl532Z9H17k2K_VdT5BL8xwYFYpKtOc-Vgi6Gz2KnhSXlOYBQW9PII2pGsCL4_uwIl32nibGnEDgJfnja01N-hUaLJikvR1OQuYPNaww6JcFQ_Z-_Jt4ec4YYOnrqOs7H7oE-hotwe57o5FxJlqPCccirysqlA7QU4lQxGw8qlIoU3S0WAzLqaxBOgiDET6sK_QVdq6A2TDo1NNY9ktzeW2ow"
        }
    ]
}
```

## UserInfo

This API allows you to fetch information about a user.

### Parameters

|Parameter|Mandatory|Description|
|---|---|---|
|`client_id`|No|Your client ID|
|`ACCESS_TOKEN`|Yes|An access token obtained by your application on behalf of the user|

### Request

```curl
curl -X GET 'https://ims-na1.adobelogin.com/ims/userinfo/v2?client_id={YOUR_CLIENT_ID}' \
     -H 'Authorization: Bearer {ACCESS_TOKEN}'
```

### Sample Response

```json
{
  "sub": "B0DC108C5CD449CA0A494133@c62f24cc5b5b7e0e0a494004",
  "account_type": "ent",
  "email_verified": true,
  "address": {
    "country": "US"
  },
  "name": "John Sample",
  "given_name": "John",
  "family_name": "Sample",
  "email": "jsample@email.com"
}
```
### Response Object

|Properties|Projected by scope|Description|
|---|---|---|
|`sub`|`openid`|The user ID|
|`account_type`|`profile`|Can be one of two values:**`ind`:** User is an individual account **`ent`:** User is part of an organization|
|`email_verified`|`email`|Whether the user's email address has been verified|
|`address`|`address`|User's address - currently, only the two-digit country code is returned|
|`name`|`profile`|User's full name|
|`given_name`|`profile`|User's given name|
|`family_name`|`profile`|User's family name or last name|
|`email`|`email`|User's email address|

To fetch the keys with which the ID Tokens are signed see [ID Token Keys](#id-token-keys).

## Authorize Request

Once a user lands on your application to initiate the OAuth authentication flow, your application should redirect the user to an Adobe IMS URL. While the URL endpoint is common, the query parameters would be specific to your application. 

Read along to find out more about constructing the full authorize URL with values for the different query parameters.

### Parameters

Several query parameters are available to you as a developer to customize the user experience for your application. Some of the query parameters are mandatory, and others optional. Using the parameters outlined in the table below, you can construct the authorize URL for your application.


|Parameter|Mandatory|Description|
|---|---|---|
|`client_id`|Yes|The client ID obtained from [Adobe Developer Console](https://developer.adobe.com/console/).|
|`redirect_uri`| No|The URI to which the user agent is redirected once the authorization completes. Note that this URI must be HTTPS. The supplied value for this parameter is validated against the Redirect URI pattern supplied by you at the time of credential creation . If a redirect URI is not provided with the request or if it does not match against the pattern, Adobe will redirect the response to the Default Redirect URI supplied by you at the time of credential creation.|
|`scope`|No|The requested scopes in the form of a list of space or comma-delimited, case-sensitive strings. See the section on [OAuth 2.0 Scopes](#scopes) for more information.|
|`response_type`|No|Possible values are `code`, `token`, `id_token`, `id_token token`, `code id_token`. The default response type for the Authorization code flow is `code`.|
|`state`|Recommended|Client-defined state data that is replayed back to the client. It must not be longer than 4096 characters and does not need to be a JSON object. Typically, Cross-Site Request Forgery (CSRF, XSRF) mitigation is done by cryptographically binding the value of this parameter with a browser cookie.|
|`nonce`|No|String value used to associate a Client session with an ID Token and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token.|
|`prompt`|No|Space-delimited, case-sensitive list of ASCII string values that specifies whether Adobe prompts the end-user for authentication or fails the authorize step if user is not authenticated. Supported values: `none`, `login`.`none` → Does not show any UI. Either returns successfully with a valid authentication response or returns with an error.`error=login_required` → No user is logged in.`error=consent_required` → User is Logged in, but has not granted access to your app.`error=interaction_required` → User is logged in and has granted access to your app, but there is some other action they need to perform (Accept terms of use, etc.).`login` → Even if the user is authenticated, they will see the login screen.No value supplied → Default behavior.|
|`code_challenge_method`|No, defaults to `plain`|Possible values: `S256`, `plain`|
|`code_challenge`|Required for Public Clients| The `code_challenge` parameter is a security measure to confirm whether the authorize and token requests originated from the same application.A `code_challenge` comes in pair with a `code_verifier`. A `code_verifier` is a random string of at least 43 characters (see [allowed character set](https://datatracker.ietf.org/doc/html/rfc7636#section-4.1)).Based on the `code_challenge_method`, the `code_challenge` can then be according to - If `code_challenge_method` = `plain`, then `code_challenge` = `code_verifier`If `code_challenge_method` = `S256`, then `code_challenge` =  `BASE64_URL_ENCODE(SHA256(code_verifier))` The `code_challenge` is sent with the authorize request, while the corresponding `code_verifier` is sent with the [token request](#fetching-access-tokens). For more information, read the [Proof Key for Code Exchange by OAuth Public Clients](https://tools.ietf.org/html/rfc7636) documentation. You can use [online tools](https://example-app.com/pkce) to experiment with `code_challenge` and `code_verifier`.|
|`response_mode`|No|Possible values: `query`, `fragment`. For more information, refer to this [openid documentation](https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#ResponseModes).If `response_mode` is not specified, the following defaults are applied:code → querytoken → fragmentid_token → fragmentid_token token → fragmentcode id_token → fragment|

### Constructing the Request URL for OAuth Web App and OAuth Web Credentials

**Note:** The request URL has been split into multiple lines for readability. A complete request path includes multiple parameters separated by an ampersand (`&`) with no spaces or line breaks.

```
https://ims-na1.adobelogin.com/ims/authorize/v2
  ?client_id={CLIENT_ID}
  &redirect_uri={REDIRECT_URI}
  &scope={SCOPES}
  &state={STATE}
  &response_type=code
```

##### Sample Request URL

```
https://ims-na1.adobelogin.com/ims/authorize/v2?client_id=202b135c20864fbfb26a46522aa2433b&redirect_uri=https://www.myapp.com/OAuth/callback&scope=openid,creative_sdk&state=90cff02f-da33-46ec-985c-1f5cf2f9644a&response_type=code
```

**Note:** Ensure that you are using the latest version (`v2`) of the `/authorize` endpoint.

### Constructing the Request URL for all other OAuth credentials

**Note:** The request URL has been split onto multiple lines for readability. A complete request path includes multiple parameters separated by an ampersand (`&`) with no spaces or line breaks.

```
https://ims-na1.adobelogin.com/ims/authorize/v2
  ?client_id={CLIENT_ID}
  &code_challenge={CODE_CHALLENGE}
  &code_challenge_method=S256
  &redirect_uri={REDIRECT_URI}
  &scope={SCOPES}
  &state={STATE}
  &response_type=code
```

##### Sample Request URL

```
https://ims-na1.adobelogin.com/ims/authorize/v2?client_id=135c20864fbfb26a46522aa2433b&code_challenge=c9vBtg5G7DupTxSYODrpd2LpBeECiSTTQtQclGNMklM&code_challenge_method=S256&redirect_uri=https://www.myapp.com/OAuth/callback&scope=openid,creative_sdk&state=90cff02f-da33-46ec-985c-1f5cf2f9644a&response_type=code
```

**Note:** Ensure that you are using the latest version (`v2`) of the `/authorize` endpoint.

### Successful response

After the user has authenticated and been granted consent to your application, the user agent will be redirected to `{YOUR_REDIRECT_URI}` with parameters determined by the `response_type` sent in the request.

|Response Type (`response_type`)|Parameters|
|---|---|
|`token`| `access_token={ACCESS_TOKEN}&state={STATE}&token_type=bearer&expires_in=86399` `token_type` will always be `bearer`.`expires_in` is the validity of the token in seconds.|
|`code`| `code={AUTHORIZATION_CODE}&state={STATE}`|
|`id_token`|`id_token={ID_TOKEN}&state={STATE}`|
|`id_token token`|`id_token={ID_TOKEN}&access_token={ACCESS_TOKEN}&state={STATE}&token_type=bearer&expires_in=86399`|
|`code id_token`|`id_token={ID_TOKEN}&code={AUTHORIZATION_CODE}&state={STATE}`|

The parameters will be in the `query` or the `fragment`, according to the `response_mode` parameter included in the request. If a `response_mode` is not specified, the default values are used as shown in the [Authorization parameters table](#authorize-request).

## Fetching Access tokens

Once the user grants access to your application your application can fetch access tokens by using the tokens API.

### Parameters

Parameters can be sent in the body or as query parameters. Passing parameters in the body is recommended for sensitive data, as query parameters may be logged by app servers.

|Parameter|Mandatory|Description|
|---|---|---|
|`code`|Yes|The value of the `code` query/fragment parameter returned in the callback request from the autorize step | 
|`grant_type`|Yes|Value should always be `authorization_code`|
|`authorization`| Required for confidential clients|Basic Authorization header.`Authorization: Basic Base64(clientId:clientSecret)`|
|`client_id`|Required for PUBLIC clients|The Client ID obtained from the [Adobe Developer Console](https://developer.adobe.com/console/)|
|`code_verifier`|Required for PUBLIC clients|Code verifier corresponding to the `code_challenge` sent during [authorize request](#authorize-request).|


### Request for OAuth Web App credential

```curl
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
  -H 'Authorization: Basic {AUTHORIZATION}' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'code={AUTHORIZATION_CODE}&grant_type=authorization_code'
```

### Request for OAuth Single Page App and OAuth Native App credentials

```curl
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3?client_id={CLIENT_ID}' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'code={AUTHORIZATION_CODE}&grant_type=authorization_code&code_verifier={CODE_VERIFIER}'
```
  
### Sample Response

```json
{
    "access_token": "{ACCESS_TOKEN}",
    "refresh_token": "{REFRESH_TOKEN}",
    "sub": "B0DC108C5CD449CA0A494133@c62f24cc5b5b7e0e0a494004",
    "id_token": "{ID_TOKEN}",
    "token_type": "bearer",
    "expires_in": 86399
}
```

**Note:** The refresh token is only present if the `offline_access` scope is requested in the authorize step and subsequently consented to by the user.

### Response Object

|Property|Description|
|---|---|
|`access_token`|Generated access token. By default they expire in 24 hours.|
|`refresh_token`|Generated refresh token. By default they expire in 14 days.|
|`token_type`|Token type will always be `bearer`.|
|`id_token`|Generated ID token.Present if `openid` is added as scope. See the section on [OAuth 2.0 Scopes ](#scopes) for more information.|
|`expires_in`|Validity of access token in seconds.|

## Refreshing Access tokens

Once you have fetched the access tokens for a user you may also be provided a refresh token in the response. A refresh token is only presented when the `offline_access` scope is requested in the authorize step. Please note that not all APIs and Services support the `offline_access` scope for security reasons.

### Parameters

|Parameter|Mandatory|Description|
|---|---|---|
|`refresh_token`|Yes|The base64-encoded refresh token received in the response to the initial request for an access token|
|`grant_type`|Yes|The value is always `refresh_token`|
|`client_id`|Only for PUBLIC clients|The client ID obtained from [Adobe Developer Console](https://developer.adobe.com/console/)|
|`authorization`|Only for Confidential clients|Basic Authorization header.`Authorization: Basic Base64(clientId:clientSecret)`|


### Request for OAuth Web App credential

```curl
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
  -H 'Authorization: Basic {AUTHORIZATION}' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=refresh_token&refresh_token={REFRESH_TOKEN}'
```

### Request for OAuth Single Page App and OAuth Native App credentials

```curl
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3?client_id={CLIENT_ID}' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=refresh_token&refresh_token={REFRESH_TOKEN}'
```
  
### Sample Response

```json
{
    "access_token": "{ACCESS_TOKEN}",
    "refresh_token": "{REFRESH_TOKEN}",
    "token_type": "bearer",
    "expires_in": 86399
}
```

### Response Object

|Property|Description|
|---|---|
|`access_token`|Generated access token|
|`refresh_token`|Generated refresh token.`offline_access` scope is needed for this to be returned. See the section on [OAuth 2.0 Scopes](#scopes) for more information.|
|`token_type`|Token type will always be `bearer`.|
|`expires_in`|Validity of access token in seconds.|


## Token revocation

Use this API to revoke an access token or refresh token.

**Note:** Users can also revoke your application's access to their data by visiting the [Connected Applications](https://accounts.adobe.com/security/connected-applications#) page on their Adobe account. In case a user revokes access to your application and then visits your application - the authorization workflow will prompt the user for their consent again.

### Parameters

Parameters can be sent in the body or as query parameters. Passing parameters in the body is recommended for sensitive data, as query parameters may be logged by app servers.

|Parameter|Mandatory|Description|
|---|---|---|
|`AUTHORIZATION`|Required only for `OAuth Web` and `OAuth WebApp` type credentials|Basic Authorization header.`Authorization: Basic Base64(clientId:clientSecret)`|
|`client_id`|Required only for `OAuth Android`, `OAuth iOS`, `OAuth Single Page App` and `OAuth Native App` credentials| Your client id|
|`token`|Yes|The access token or refresh token to be invalidated|


### Request for OAuth Web and OAuth Web App credentials

```curl
curl -X POST 'https://ims-na1.adobelogin.com/ims/revoke' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'Authorization: Basic {AUTHORIZATION}' \
     -d 'token={TOKEN}'
```

### Request for all other OAuth credentials

```curl
curl -X POST 'https://ims-na1.adobelogin.com/ims/revoke?client_id={CLIENT_ID}' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -d 'token={TOKEN}'
```
  
### Response

A successful response returns HTTP Status 200 (OK) and no response body.


## Scopes

### Identity scopes

|Scope|Consent description|Details|
|---|---|---|
|`openid`|Can access user account and read a unique identifier|Mandatory scope to enable authorization flows.|
|`email`|Can read user email address|Returns `email` and `email_verified` claims.|
|`address`|Can read user postal address|Returns `address` claim. Currently this contains only the country code.|
|`profile`|Can read basic user profile, including information like `name`|Returns `name`, `family_name`, `given_name`, `account_type` claims.|
|`offline_access`|The app can access the data user has given permission to, even when user is not using the app|Allows the return of a refresh token.|

### Creative Cloud

Scopes for Creative Cloud user authentication based APIs

APIs | Scopes
---|---
Adobe Stock | `openid`
Creative SDK | `openid,creative_sdk`
Photoshop | `openid,creative_sdk`
Lightroom | `openid,creative_sdk`

### Experience Cloud

Scopes for Experience Cloud user authentication based APIs

APIs | Scopes
---|---
Adobe Analytics | ```openid, AdobeID, read_organizations, additional_info.projectedProductContext, additional_info.job_function```
