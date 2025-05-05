# User Authentication Implementation Guide

The following guide goes over finer implementation details for user authentication credentials. At the end of this guide is a list of recommended industry-standard OAuth2 libraries. Before proceeding, we recommend you familiarize yourself with the 3-legged OAuth flow in our  [user authentication guide](index.md).

## User authentication credential types

If an API or Event you are adding to your project uses user authentication credentials, you can select the credential type depending on your application's platform. 

The following types of user authentication credentials are available:

1. OAuth Web App credential
2. OAuth Single Page App credential
3. OAuth Native App credential
4. OAuth Web credential *(deprecated)*
5. OAuth iOS credential *(deprecated)*
6. OAuth Android credential *(deprecated)*

<InlineAlert slots="text"/>

Depending on the selected API, some platforms may not be available to use with that API. Select the platform that best suits your application use case if more than one platform is available.

![](../../../images/services-api-oauth-configure.png)

### OAuth Web App credential

The Web App platform is best suited for applications with a backend server with a web, mobile, or desktop frontend. OAuth credentials for Web App require the application to store a client secret on the backend server securely. The application can then fetch tokens using the client secret on the backend server and not risk exposing the client secret or the tokens through the frontend application.

When setting up an OAuth credential for the Web App platform, you are required to provide the following:
1. [A Default Redirect URI](#default-redirect-uri) 
2. [A Redirect URI pattern](#redirect-uri-pattern)

Suppose the list of scope your application requests includes the `offline_access` scope. In that case, your application will also receive a refresh token that can be used to regenerate access tokens without needing the user to sign in again or even be present.

<InlineAlert slots="text"/>

In OAuth 2.0 standard terminology, an OAuth Web App credential is a *confidential* client with an HTTPS redirect.

### OAuth Single Page App credential

The OAuth Single Page App credential is best suited for JavaScript-based applications that run in the browser and either do not have a backend server or want to fetch tokens on the front end. OAuth credentials for Single Page Apps do not require the application to store a client secret and, therefore, must utilize the [OAuth 2.0 PKCE flow](https://oauth.net/2/pkce/) to obtain tokens securely. The OAuth Single Page App credential can also be used for mobile-only applications utilizing a web view.

When setting up an OAuth credential for the Single Page App platform, you are required to provide the following:
1. [A Default Redirect URI](#default-redirect-uri) 
2. [A Redirect URI pattern](#redirect-uri-pattern)

Refresh tokens are not available for the OAuth Single Page App credential. Your application will need the user to sign in again to generate a new access token.

<InlineAlert slots="text"/>

In OAuth 2.0 standard terminology, an OAuth Single Page App credential is a *public* client with an HTTPS redirect.


### OAuth Native App credential

The Native App platform is best suited for applications that run natively on a device (Android, iOS, Windows, Mac, and others) and either do not have a backend server or want to fetch tokens on the front end. OAuth credentials for Native Apps do not require the application to store a client secret and, therefore, must utilize the [OAuth 2.0 PKCE flow](https://oauth.net/2/pkce/) to obtain tokens securely.

Refresh tokens are not available for the OAuth Native App credential. Your application will need the user to sign in again to generate a new access token.

<InlineAlert slots="text"/>

In OAuth 2.0 standard terminology, an OAuth Native App credential is a *public* client with a non-HTTPS redirect.


### OAuth Web credential *(deprecated)*

The OAuth credential for the Web platform has been deprecated in favor of the [Web App platform](#web-app). Furthermore, the new Web App platform credentials do not support the weaker OAuth implicit flow. Applications looking for a substitute for the OAuth implicit flow should use the more secure [Single Page App platform](#single-page-app).

### OAuth iOS credential *(deprecated)*

The OAuth credential for the iOS platform has been deprecated in favor of the [Native App platform](#native-app).

### OAuth Android credential *(deprecated)*

The OAuth credential for the Android platform has been deprecated in favor of the [Native App platform](#native-app).

## Understanding default redirect URI and redirect URI patterns

For OAuth Web App and OAuth Single Page App credentials, you need to configure the default redirect URI and the redirect URI patterns.

In the 3-legged OAuth workflow outlined above, your application will send the user to sign in to her account and grant permissions to your application. Once this happens, Adobe will need to send the user back to your application. Adobe determines where to redirect the user based on the value of the default redirect URI and the redirect URI patterns you have configured.

The page served by your application post redirection must be able to handle both scenarios - where the user accepts/rejects granting permissions to your application. If the user grants your application permissions, your application will receive the authorization code as a query parameter when Adobe redirects the user back to your app.

### Default redirect URI

Adobe sends the user back to the default URI if no redirect URI is specified in the authorization request. See [authorization request](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.1).

You can specify a default redirect URI of up to 256 characters. It must be an absolute URI and cannot contain wildcards of regexes.

<InlineAlert slots="text"/>

The *Default redirect URI* MUST be hosted on a secure server (HTTPS), even if it is only a localhost instance. For example, [https://example.com/redirect/](https://example.com/redirect/), https://localhost/redirect/. 

### Redirect URI pattern

When creating a new authorization request, the OAuth 2.0 framework allows your application to request a different redirect URI than the default Redirect URI by using the `redirect_url` query parameter. However, any requested redirect URI must match the *Redirect URI pattern* you supply. The authorized request can only be completed if the requested Redirect URI passes regex matching.

A *Redirect URI pattern* is a URI path (or comma-separated list of URI paths) to which Adobe can redirect (if requested) when the login and consent flow is completed. The URIs mentioned must be within your application domain. The redirect URI pattern field can accommodate up to 512 characters.

<InlineAlert slots="text"/>
  
You can use wildcards in the redirect URI pattern to club multiple redirect URIs together. Remember to escape periods (**.**) with **\\**. For example, **https://example\\.com/**.

## OAuth 2.0 Scopes

OAuth scopes directly relate to the access and permissions your application has on behalf of a user using your application. Based on the APIs and Events you add to your project, your credential will gain access to a set of scopes your application can request. 

Each scope your application requests during the authorization workflow, would be shown with a short description to the user on the consent screen. The user can approve or reject your application to gain those permissions.

You can always find the scopes your application can request by visiting the credential page and the *Scopes tab*. See our API reference to view some commonly encountered scopes -

1. [Identity scopes](./ims.md#identity-scopes)
2. [Creative Cloud Scopes](./ims.md#creative-cloud)
3. [Experience Cloud Scopes](./ims.md#experience-cloud)

## Standard OAuth2 libraries

The  OAuth community site [https://oauth.net](https://oauth.net/) has a huge list of community-maintained OAuth2 libraries. Some widely known and maintained OAuth2 libraries from that list are -

1. [Passport OAuth2](https://github.com/jaredhanson/passport-oauth2) (Javascript)
2. [PassportJS](https://github.com/jaredhanson/passport) (Node.js)
3. [Spring Security](https://spring.io/projects/spring-security) (Java)
4. View more libraries at [https://oauth.net/code/](https://oauth.net/code/)

<InlineAlert slots="text"/>

Using industry-standard libraries is the quickest and most secure way of integrating with OAuth. We recommend developers diligently pick the OAuth 2.0 library that works best for their application.

### Sample apps

The following samples demonstrate basic interaction with the Adobe OAuth endpoints.

- **Node.js Example**  
  [Github repo](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-auth-node) where you can find a complete Node.js-based web app example that uses Adobe OAuth.

- **Python Example**  
  [Github repo](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-auth-python) where you can find a complete Python based web app example that uses Adobe OAuth.

## OAuth 2.0 Playground

The OAuth 2.0 playground allows you to test out the 3-legged OAuth flow and obtain access tokens for experimentation. Learn more about the playground [here](../Tools/o-auth-playground.md).

## Further Reading

There are several great resources to get more familiar with the OAuth2.0 framework - 

+ [The OAuth 2.0 Authorization Framework - RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)
+ [Proof Key for Code Exchange by OAuth Public Clients - RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)
+ [StackOverflow](https://stackoverflow.com/questions/tagged/oauth-2.0)
+ Authentication API Reference
  + [Authorize Request](./ims.md#authorize-request)
  + [Fetching Access Tokens](./ims.md#fetching-access-tokens-for-user-authentication-credentials)
  + [Refreshing Access Tokens](./ims.md#refreshing-access-tokens)
  + [Revoking a Token](./ims.md#token-revocation)
