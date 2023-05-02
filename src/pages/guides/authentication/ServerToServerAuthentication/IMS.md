# OAuth Server-to-Server credential API Reference

Following is an API reference for Adobe Identity Management Services (IMS) APIs.

## Fetching access tokens

The OAuth Server-to-server credential uses the `client_credentials` grant to generate access tokens.

### Parameters

Parameters can be sent in the body or as query parameters. Passing parameters in the body is recommended for sensitive data, as query parameters may be logged by app servers.

|Parameter|Mandatory|Description|
|---|---|---|
|`grant_type`|Yes|Value should always be `client_credentials`|
|`client_id`|Yes|The Client ID obtained from the [Adobe Developer Console](/console)|
|`client_secret`|Yes|The value of client secret obtained from the [Adobe Developer Console](/console)|
|`scopes`|Yes|The list of comma separated scopes you are requesting. To see the scopes available to your credential, visit your project your the [Adobe Developer Console](/console)|


### Request for OAuth Server-to-Server credential

```curl
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3?client_id={CLIENT_ID}' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'client_secret={CLIENT_SECRET}&grant_type=client_credentials&scope={SCOPES}'
```

### Sample Response

```json
{
    "access_token": "{ACCESS_TOKEN}",
    "token_type": "bearer",
    "expires_in": 86399
}
```

## Refreshing access tokens

You do not need a refresh token for OAuth Server-to-Server credentials. You can always request a new access token directly using your *client_id*, *client_secret*, and *scopes*. See [fetching access tokens](#fetching-access-tokens).
