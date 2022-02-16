# Authentication API Reference

Following is an API reference for Adobe Identity Management Services (IMS) APIs.

## UserInfo

This API allows you to fetch information about an user.

### Parameters

|Parameter|Mandatory|Description|
|---|---|---|
|`client_id`|No|Your client ID|
|`ACCESS_TOKEN`|Yes|An aceess token obtained by your application on behalf of the user|

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
|`account_type`|`profile`|Can be one of two values:<br/><ul><li>**`ind`:** User is an individual account</li><li>**`ent`:** User is part of an organization</li></ul>|
|`email_verified`|`email`|Whether the user's email address has been verified|
|`address`|`address`|User's address - currently only the two-digit country code is returned|
|`name`|`profile`|User's full name|
|`given_name`|`profile`|User's given name|
|`family_name`|`profile`|User's family name or last name|
|`email`|`email`|User's email address|

## Token revocation

Use this API to revoke an access token or refresh token.

**Note:** Users can also revoke your application's access to their data by visiting the [Connected Applications](https://accounts.adobe.com/security/connected-applications#) page on their Adobe account. In case a user revokes access to your application and then visits your application - the authorization workflow will prompt the user for their consent again.

### Parameters

Parameters can be sent in the body or as query parameters. Passing parameters in the body is recommended for sensitive data, as query parameters may be logged by app servers.

|Parameter|Mandatory|Description|
|---|---|---|
|`AUTHORIZATION`|Required only for `OAuth Web` and `OAuth WebApp` type credentials|Basic Authorization header.<br/><br/>`Authorization: Basic Base64(clientId:clientSecret)`|
|`client_id`|Required only for `OAuth Android`, `OAuth iOS`, `OAuth Single Page App` and `OAuth Native App` credentials| Your client id|
|`token`|Yes|The access token or refresh token to be invalidated|


### Request for OAuth Web and OAuth Web App credentials

```curl
curl -X POST 'https://ims-na1.adobelogin.com/ims/revoke' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'Authorization: Basic {AUTHORIZATION}' \
     -d 'token={TOKEN}'
```

### Request for all other credentials

Supported credential types: `OAuth Android`, `OAuth iOS`, `OAuth Single Page App` and `OAuth Native App`

```curl
curl -X POST 'https://ims-na1.adobelogin.com/ims/revoke?client_id={CLIENT_ID}' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -d 'token={TOKEN}'
```
  
### Response

A successful response returns HTTP Status 200 (OK) and no response body.