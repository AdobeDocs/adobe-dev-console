# OAuth 2.0 Authentication and Authorization

Adobe Cloud Platform APIs use the OAuth 2.0 protocol for authentication and authorization. Using Adobe OAuth 2.0, you can generate an access token using the [OAuth Integration](../OAuthIntegration.md) created in [Adobe Developer Console](/console), which is used to make API calls from your web server or browser-based apps.

The basic web OAuth 2.0 workflow includes the following two steps:

1. Asking a user to authorize your application
2. Fetching user access tokens and refreshing those tokens once they expire.

## Asking a user to authorize your application

The basic flow of the authorize step is as follows - 

1. The user lands on your application.
2. Your application _redirects_ the user to Adobe, along with the list of requested permissions.
3. Adobe prompts the user with a login screen and informs the user of the requested permissions.
4. The user decides whether to grant the permissions.
5. Adobe sends a _callback_ to your application to notify whether the user granted the permissions.

For instructions to integrate the authorize step in your application, please visit our [Authorize Request](../IMS.md#authorize-request) section on the Authentication API Reference page.

## Fetch user access tokens

Once the user grants/denies your application access and your application receives a _callback_. If the user did not grant your application access, you could take the user back to an appropriate screen in your application.

However, if the user granted access to your application, your application then needs to retrieve tokens required to make further API requests on behalf of the user.
1. Your application would make a request to Adobe IMS to fetch access tokens.
2. If your application has access to the `offline_access` scope, the token response would also contain a refresh token.
3. Your application can then use a refresh token to fetch more access tokens as previous access tokens expire.

To fetch access tokens in your application, please visit the [Fetching Access Tokens](../IMS.md#fetching-access-tokens) section on the Authentication API Reference page. 
To refresh access tokens once they expire, please visit the [Refereshing Access Tokens](../IMS.md#refreshing-access-tokens) section on the Authentication API Reference page.

## Revoking authorization for end-user

Users can revoke your application by visiting the [Connected Applications](https://accounts.adobe.com/security/connected-applications#) page. And when the user launches your application next, the authorization workflow will start from the beginning.

If you need to revoke a particular access token or refresh token, please visit the [Token Revocation](../IMS.md#token-revocation) section on the Authentication API Reference page.

## Further Reading

+ View our [code samples](samples.md) to integrate with OAuth quickly.
+ View more details about OAuth scopes on our documentation about [Scopes](Scopes.md).
+ Authentication API Reference
  + [Authorize Request](../IMS.md#authorize-request)
  + [Fetching Access Tokens](../IMS.md#fetching-access-tokens)
  + [Refreshing Access Tokens](../IMS.md#refreshing-access-tokens)
  + [Revoking a Token](../IMS.md#token-revocation)