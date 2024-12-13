# OAuth Server-to-Server credential API Reference

Following is an API reference for Adobe Identity Management Services (IMS) APIs.

- [Fetching access tokens](#fetching-access-tokens)
- [Refreshing access tokens](#refreshing-access-tokens)
- [List all client secrets](#list-all-client-secrets)
- [Add client secret to credential](#add-client-secret-to-credential)
- [Remove client secret from credential](#remove-client-secret-from-credential)


## Fetching access tokens

The OAuth Server-to-server credential uses the `client_credentials` grant to generate access tokens.

### Parameters

Parameters can be sent in the body or as query parameters. Passing parameters in the body is recommended for sensitive data, as query parameters may be logged by app servers.

| Parameter       | Mandatory | Description                                                                                                                                                          |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `grant_type`    | Yes       | Value should always be `client_credentials`                                                                                                                          |
| `client_id`     | Yes       | The Client ID obtained from the [Adobe Developer Console](/console)                                                                                                  |
| `client_secret` | Yes       | The value of client secret obtained from the [Adobe Developer Console](/console)                                                                                     |
| `scope`         | Yes       | The list of comma separated scopes you are requesting. To see the scopes available to your credential, visit your project on the [Adobe Developer Console](/console) |
