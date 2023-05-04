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


## List all client secrets

Note: No `client_secret` values are returned by this API. Only the secret `uuid` and other metadata is returned. 

### Parameters

|Parameter|Where|Mandatory|Description|
|---|---|---|---|
|`org_id`|URL|Yes|For instructions on where to find the `org_id`, see step 2 and 3 on our guide to [rotate secrets programmatically](./implementation.md#rotating-client-secrets-programmaticaly)|
|`credential_id`|URL|Yes|For instructions on where to find the `credential_id`, see step 2 and 3 on our guide to [rotate secrets programmatically](./implementation.md#rotating-client-secrets-programmaticaly)|
|`client_id`|Headers|Yes|The Client ID obtained from the [Adobe Developer Console](/console)|
|`access_token`|Headers|Yes|For instructions on how to generate an access token, see step 5 on our guide to [rotate secrets programmatically](./implementation.md#rotating-client-secrets-programmaticaly)|

### Request for OAuth Server-to-Server credential

```curl
curl -X GET 'https://api.adobe.io/console/organizations/{org_id}/credentials/{credential_id}/secrets' \
     -H 'Authorization: Bearer {access_token}'
     -H 'x-api-key: {client_id}'
```

### Sample Response

200 OK

```json
{
    "client_id": "e053e1a87cf74c68a6ec8e71d4a82662",
    "client_secrets": [
        {
            "expires_at": "PERMANENT",
            "expires_at_str": "PERMANENT",
            "created_at": "1682448485000",
            "created_at_str": "Tue, Apr 25 2023 18:48:05.000 UTC",
            "uuid": "11ede399b68b57a5aca6a96b8b6487c9",
            "secret_usages": null
        },
        {
            "expires_at": "PERMANENT",
            "expires_at_str": "PERMANENT",
            "created_at": "1683005777000",
            "created_at_str": "Tue, May 2 2023 05:36:17.000 UTC",
            "uuid": "11ede8ab42f138f3abe335d886a407fb",
            "secret_usages": [
                {
                    "last_used_at": "1683162010101",
                    "grant_type": "client_credentials"
                }
            ]
        }
    ]
}
```

Note: the `created_at` and `last_used_at` values are in milliseconds since UNIX epoch.

## Add client secret to credential

You can add up to 2 client secrets for an OAuth Server-to-Server credential.

Note: The API response contains the the `client_secret` that was added and its `uuid`. This `client_secret` will never be returned in plain text by any other API response. However, you can still find it on the Developer Console UI.


### Parameters

|Parameter|Where|Mandatory|Description|
|---|---|---|---|
|`org_id`|URL|Yes|For instructions on where to find the `org_id`, see step 2 and 3 on our guide to [rotate secrets programmatically](./implementation.md#rotating-client-secrets-programmaticaly)|
|`credential_id`|URL|Yes|For instructions on where to find the `credential_id`, see step 2 and 3 on our guide to [rotate secrets programmatically](./implementation.md#rotating-client-secrets-programmaticaly)|
|`client_id`|Headers|Yes|The Client ID obtained from the [Adobe Developer Console](/console)|
|`access_token`|Headers|Yes|For instructions on how to generate an access token, see step 5 on our guide to [rotate secrets programmatically](./implementation.md#rotating-client-secrets-programmaticaly)|

### Request for OAuth Server-to-Server credential

```curl
curl -X POST 'https://api.adobe.io/console/organizations/{org_id}/credentials/{credential_id}/secrets' \
     -H 'Authorization: Bearer {access_token}'
     -H 'x-api-key: {client_id}'
```

### Sample Response

201 Created


```json
{
  "expires_at": "PERMANENT",
  "expires_at_str": "PERMANENT",
  "client_secret": "XXXXXXXXXXXXX",
  "created_at": "1683005777000",
  "created_at_str": "Tue, May 2 2023 05:36:17.000 UTC",
  "uuid": "11ede8ab42f138f3abe335d886a407fb",
  "secret_usages": null
}
```

Note: the `created_at` and `last_used_at` values are in milliseconds since UNIX epoch.


## Remove client secret from credential

Note: you need the secret `uuid` to delete a secret. You cannot use the plain text `client_secret` value to identify which secret to delete.

### Parameters

|Parameter|Where|Mandatory|Description|
|---|---|---|---|
|`org_id`|URL|Yes|For instructions on where to find the `org_id`, see step 2 and 3 on our guide to [rotate secrets programmatically](./implementation.md#rotating-client-secrets-programmaticaly)|
|`credential_id`|URL|Yes|For instructions on where to find the `credential_id`, see step 2 and 3 on our guide to [rotate secrets programmatically](./implementation.md#rotating-client-secrets-programmaticaly)|
|`uuid`|URL|Yes|The uuid of the secret you wish to delete. See the [list all secrets API](#list-all-client-secrets) to get the secret's `uuid`.|
|`client_id`|Headers|Yes|The Client ID obtained from the [Adobe Developer Console](/console)|
|`access_token`|Headers|Yes|For instructions on how to generate an access token, see step 5 on our guide to [rotate secrets programmatically](./implementation.md#rotating-client-secrets-programmaticaly)|

### Request for OAuth Server-to-Server credential

```curl
curl -X DELETE 'https://api.adobe.io/console/organizations/{org_id}/credentials/{credential_id}/secrets/{uuid}' \
     -H 'Authorization: Bearer {access_token}'
     -H 'x-api-key: {client_id}'
```

### Sample Response

204 No Content