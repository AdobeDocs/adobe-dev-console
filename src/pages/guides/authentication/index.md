<HeroSimple slots="heading, text"/>

# Authentication Guide

Learn how to integrate with Adobe products and services in your application securely. The following guide is a technical reference for the Adobe supported authentication types available to your application.

## Overview

Adobe is committed to the privacy and security of our users and their data. Therefore, understanding various authentication and authorization mechanisms is uniquely important for a developer integrating with Adobe products and services.

Depending on the Adobe product or service you are integrating into your app, you may be required to use one or more of the authentication types listed below. Each authentication type has different credential types supporting different platforms (web, mobile, desktop, etc.).

1. [User authentication](./UserAuthentication/index.md)
   * [OAuth Web App credential](./UserAuthentication/implementation.md#oauth-web-app-credential)
   * [OAuth Single Page App credential](./UserAuthentication/implementation.md#oauth-single-page-app-credential)
   * [OAuth Native App credential](./UserAuthentication/implementation.md#oauth-native-app-credential)

2. [Server to server authentication](./ServerToServerAuthentication/index.md)
   * [OAuth Server to Server credential](./ServerToServerAuthentication/index.md#oauth-server-to-server-credential)

3. [API key authentication](./APIKeyAuthentication/index.md)
   * [API Key credential](./APIKeyAuthentication/index.md#api-key-credential)


## User authentication

If your application needs to read or modify the data owned by an Adobe end-user, it can do so using a user authentication credential. However, before your application can view or edit the user's data, the user would need to provide explicit 'consent' to your application.

View our guide on user authentication credentials -
1. [Understanding OAuth 2.0 `authorization_code` grant flow (3-legged OAuth)](./UserAuthentication/index.md)
2. [Learning about the different user authentication credential types](./UserAuthentication/implementation.md#user-authentication-credential-types)
3. [Understanding default redirect URI and redirect URI pattern](./UserAuthentication/implementation.md#understanding-default-redirect-uri-and-redirect-uri-patterns)
4. [Implementing user authentication using standard OAuth2 libraries](./UserAuthentication/implementation.md#standard-oauth2-libraries)


## Server to server authentication

If your application needs to read or modify data owned by your application or your organization, you can use a server to server authentication credential. Server to server authentication credentials only allow you to access your application's data or your organization's data and, therefore, do not require an end user to sign in.

View our guide on server to server authentication credentials -
1. [Understanding server to server credentials](./ServerToServerAuthentication/index.md)
2. [Learning about the different Server to server authentication credential types](./ServerToServerAuthentication/index.md#server-to-server-credential-types)
3. [Setting up the credential - credential name, product profiles](./ServerToServerAuthentication/implementation.md#setting-up-the-oauth-server-to-server-credential)
4. [Implementing server to server authentication using standard OAuth2 libraries](./ServerToServerAuthentication/implementation.md#generating-access-tokens-using-standard-oauth2-libraries)
5. [Rotating client secrets programmatically](./ServerToServerAuthentication/implementation.md#rotating-client-secrets-programmatically)


<InlineAlert slots="text"/>

As of June 30, 2025, Service Account (JWT) credentials have reached their end of life and are no longer supported. All server-to-server integrations must use the [OAuth Server-to-Server credentials](../authentication/ServerToServerAuthentication/implementation.md). View the [migration guide](../authentication/ServerToServerAuthentication/migration.md) to know more.


## API key authentication 

If your application needs to integrate with an Adobe offering that supports unauthenticated workflows (does not require access tokens), you can do so by using API key credential. The API key credential identifies your application to Adobe servers and can help accept/reject requests originating from certain domains that you configure during credential setup.

View our guide on API key credentials - 
1. [Understanding different uses of the API key credential](./APIKeyAuthentication/index.md#understanding-different-uses-of-the-api-key-credential)
2. [Understanding allowed origins](./APIKeyAuthentication/index.md#understanding-allowed-origins)

