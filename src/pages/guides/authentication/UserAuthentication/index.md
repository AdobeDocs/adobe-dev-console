# User Authentication

If your application needs to read or modify the data owned by an Adobe end-user, it can do so using a user authentication credential. However, before your application can view or edit the user's data, the user would need to provide explicit 'consent' to your application.

User authentication credentials rely on OAuth2.0 `authorization_code` grant type, commonly known as 3-legged OAuth. The 3-legged OAuth flow can be broken down into the following distinct workflows -

1. Asking a user to authorize your application
2. Fetching user access tokens
3. Fetching new access tokens using a refresh token
4. Applying for Adobe approval and adding beta users
5. End-user revoking consent to your application
6. Revoking access tokens or refresh tokens


If you are already familiar with 3-legged OAuth, head to our [implementation guide](./implementation.md) to begin integrating OAuth in your application. Learn about [user authentication credential types](./implementation.md#user-authentication-credential-types), [redirect URIs](./implementation.md#understanding-default-redirect-uri-and-redirect-uri-patterns), [standard libraries](./implementation.md#standard-oauth2-libraries), and more.

## Asking a user to authorize your application

Once you have successfully integrated with 3-legged OAuth in your application, the authorization flow will work as follows -
1. Your application surfaces a sign-in with Adobe button. The user lands on your application and clicks on the sign-in button.
2. Upon clicking the sign-in button, your application redirects the user to Adobe's authorize endpoint with the set of requested scopes.
3. Once the user signs in with his Adobe account, Adobe presents him with a consent screen that lists all the permissions your application requests to access his data.
4. At this point, the user decides whether to approve or reject granting permissions to your application.
5. Adobe *redirects* the user back to your application to notify whether the user granted the permissions. The URL Adobe uses to redirect the user is determined by the default redirect URI or the redirect URI pattern you set up.

For instructions to integrate the authorize step in your application, please visit our [Authorize Request](./ims.md#authorize-request) section on the Authentication API Reference page.

## Fetching user access tokens

Your application will need to generate access tokens to call any Adobe API or service on behalf of the user. The following steps outline how your application can request access tokens -
Once the user approves the scopes requested by your application, Adobe redirects the user to your application with the user's authorization code embedded as a query parameter in the redirect URL.
Your application reads the value of the `code` query parameter and issues a token request to Adobe Identity Management Services (IMS) token endpoint.
IMS returns a response with a user access token and, optionally, a refresh token.

Please visit the [Fetching Access Tokens](./ims.md#fetching-access-tokens) section on the Authentication API Reference page for instructions to fetch access tokens using the authorization code.

## Fetching new access tokens using a refresh token

If your application has access to the `offline_access` scope, your application will also receive a refresh token in the response from the IMS token endpoint (see previous section). Your application can use the refresh token to further generate access tokens without needing the user to sign in again. The following steps outline how your application can refresh access tokens -

1. Your application makes a request to the IMS token endpoint and receives an access token and a refresh token. Your application stores the refresh token securely.
2. Once the current access tokens expire, your application makes another request to the IMS token endpoint with the refresh token and receives a fresh pair of access and refresh tokens.
3. Your application must securely store the new refresh token and use it in your next refresh token request to generate access tokens indefinitely.

For instructions to refresh access tokens once they expire, please visit the [Refreshing Access Tokens](./ims.md#refreshing-access-tokens) section on the Authentication API Reference page.


## Applying for Adobe approval and adding beta users to your application

All user authentication credentials start in 'In Development' mode and have some restrictions placed on them to ensure the safety and security of Adobe users' data. Depending on the API or Event you are using in your application, you may be required to undergo Adobe approval to promote your application to production. Sometimes, you can self-service promote your user authentication credential to production.

Some key differences exist between credentials 'In Development' and 'In Production':


|                     | In Development | In Production |
|---------------------|----------------|---------------|
| Who can sign in?    | In development mode, a developer needs to supply the email addresses of beta users who can sign in and consent to the application. Other users cannot sign in to the application. | Once in production, any user can sign in and consent to the application and then use the app. |
| Redirect URI update | In development mode, a developer can configure the redirect URI for her application whenever she wants. | Once in production, a developer can only change the redirect URI for her application through a support ticket. |
| End user experience | In development mode, a beta end user providing consent to your application would see UI notices from Adobe about the application being under development. | Once in production, end users would not see any additional notices. They would see the Adobe verified application name and developer information. |


<InlineAlert slots="text"/>

Only APIs and Events that require Adobe approval allow you to change your application name as it appears on the consent screen shown to the user. Furthermore, only after passing an Adobe review can your application be used by Adobe users with a company or school account.


## End-user revoking consent to your application

Users can revoke their consent to your application by visiting the [Connected Applications](https://accounts.adobe.com/security/connected-applications#) page.

Once the user has revoked their consent, your application can no longer refresh access tokens on this user's behalf. If the user launches your application again, the authorization workflow will begin afresh and ask the user for their consent again.

## Revoking access tokens or refresh tokens 

If you need to revoke a particular access token or refresh token, please visit the [Token Revocation](./ims.md#token-revocation) section on the Authentication API Reference page.
