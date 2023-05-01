# User Authentication

If your application needs to read or modify the data owned by an Adobe end-user it can do so by using a user authentication credential. However, before your application can view or edit the user's data, the user would need to provide an explicit 'consent' to your application. 

User authentication credentials rely on OAuth2.0 `authorization_code` grant type, commonly known as 3-legged OAuth. The 3-legged OAuth flow can be broken down into the following distinct workflows - 

1. Asking a user to authorize your application
2. Fetching user access tokens
3. Fetching new access tokens using a refresh token
4. Applying for Adobe approval and using beta users feature
6. End-user revoking consent to your application
7. Revoking access tokens or refresh tokens 


If you are already familar with 3 legged OAuth, head on over to our [implmentation guide](./implementation.md) to begin integrating OAuth in your application. Learn about the different [user authentication credential types](./implementation.md#user-authentication-credential-types), [redirect URIs](./implementation.md#understanding-default-redirect-uri-and-redirect-uri-patterns), [standard libraries](./implementation.md#standard-oauth2-libraries), and more.

## Asking a user to authorize your application

Once you have successfully intgerated with 3-legged OAuth in your application, the authorization flow would work as follows - 

1. Your application surfaces a sign in with Adobe button. The user lands on your application and clicks on the sign in button.
2. Upon clicking the sign in button, your application _redirects_ the user to Adobe's authorize endpoint, along with the set of requested scopes.
3. Once the user signs in with his Adobe account, Adobe presents him with a consent screen that lists out all the permissions your application is requesting to access his data. 
4. At this point, the user decides whether to approve or reject granting permissions to your application. 
5. Adobe *redirects* the user back to your application to notify whether the user granted the permissions. The URL Adobe uses to redirect the user is determined by the the default reedirect URI or the redirect URI pattern that were setup by you.

For instructions to integrate the authorize step in your application, please visit our [Authorize Request](./IMS.md#authorize-request) section on the Authentication API Reference page.

## Fetching user access tokens

Your application will need to generate access tokens to call any Adobe API or service on behalf of the user. The following steps outline how your application can request access tokens -

1. Once the user approves the scopes requested by your application, Adobe redirects the user to your application with the user's authorization code embedded as a query parameter in the redirect URL. 
2. Your application reads the value of the `code` query parameter and issues a token request to Adobe Identity Management Services (IMS) token endpoint. 
3. IMS returns responds with a user access token and optionally a refresh token.

For instructions to fetch access tokens using the authorization code, please visit the [Fetching Access Tokens](./IMS.md#fetching-access-tokens) section on the Authentication API Reference page. 

## Fetching new access tokens using a refresh token

If your application has access to the `offline_access` scope, your application will also recieve a refresh token in the response from IMS token endpoint (see previous section). Your application can use the refresh token to further generate access tokens without needing the user to sign-in again. The following steps outline how your application can refresh access tokens - 

1. Your application makes a request to IMS token endpoint and receives an access token and a refresh token. Your application stores the refresh token securely.
2. Once the current access tokens expire, your application makes another request to IMS token endpoint with the refresh token and receives a fresh pair of access and refresh tokens.
3. Your application must store new the refresh token securely and use it in your next refresh token request to indefinitely refresh access tokens. 

For instructions to refresh access tokens once they expire, please visit the [Refereshing Access Tokens](./IMS.md#refreshing-access-tokens) section on the Authentication API Reference page.


## Applying for Adobe approval and adding beta users to your application

All user authentication credentials start out 'In Development' mode and have some restrictions placed on them to ensure the safety and security of Adobe users' data. Depending on the API or Event you are using in your application, you may be required to undergo an Adobe approval to promote your application to production. In some cases, you can self-service promote your user authentication credential to production.

There are some key differences between credentials 'In Development' and 'In Production'.

|                     | In Development | In Production |
|---------------------|----------------|---------------|
| Who can sign in?    | In development mode, a developer needs to supply email addresses of any beta beta users who can sign in and provide consent to the the application. Other users cannot sign in into the application. | Once in production, any user can sign in and provide consent to the application and then and use the app. |
| Redirect URI update | In development mode, a developer can configure the redirect URI for her application whenever she wants. | Once in production, a developer can change the redirect URI for her application only through a support ticket. |
| End user experience | In development mode, a beta end user providing consent to your application would see UI notices from Adobe about the application being under development. | Once in production, end users would not see any additional notices. They would see the Adobe verified application name and developer information. |


<InlineAlert slots="text"/>

Only APIs and Events that require Adobe approval allow you to change your application name that appears on the consent screen shown to the user. Furthermore, only after passing an Adobe review can your application be used by Adobe users with a company or school account.


## End-user revoking consent to your application

Users can revoke your application by visiting the [Connected Applications](https://accounts.adobe.com/security/connected-applications#) page.

Once the user has revoked their consent, your application will no longer be able to refresh access tokens on this user's behalf. If the user launches your application again, the authorization workflow will begin afresh and will ask the user for their consent again.

## Revoking access tokens or refresh tokens 

If you need to revoke a particular access token or refresh token, please visit the [Token Revocation](./IMS.md#token-revocation) section on the Authentication API Reference page.