<Hero slots="heading, text"/>

# Authentication Guide

Learn how to securely integrate with Adobe products and services in your application. The following guide is a technical reference for the Adobe supported authentication types available to your application. 

## Overview

Adobe is committed to the privacy and security of our users and their data. Therefore, understanding various authentication and authorization mechanisms is of unique importance for a developer integrating with Adobe products and services.

Depending on the Adobe product or service you are integrating in your app, you may be required to use one or more of the authentication types listed below. Each authentication type further has different credential types that support different platforms (web, mobile, desktop, etc.).

1. [User authentication](./UserAuthentication/index.md)
   * [OAuth Web App credential](./UserAuthentication/implementation.md#oauth-web-app-credential)
   * [OAuth Single Page App credential](./UserAuthentication/implementation.md#oauth-single-page-app-credential)
   * [OAuth Native App credential](./UserAuthentication/implementation.md#oauth-native-app-credential)

2. [Server to server authentication](./index.md#server-to-server-authentication)
   * OAuth Server to Server credential
   * Service Account (JWT) credential *(deprecated)*

3. [API key authentication](./index.md#api-key-authentication)
   * API Key credential


## User authentication

If your application needs to read or modify the data owned by an Adobe end-user it can do so by using a user authentication credential. However, before your application can view or edit the user's data, the user would need to provide an explicit 'consent' to your application. 

View our guide on user authentication credentials -
1. [Understanding OAuth 2.0 `authorization_code` grant flow (3-legged OAuth)](./UserAuthentication/index.md)
2. [Learning about the different user authentication credential types](./UserAuthentication/implementation.md#user-authentication-credential-types)
3. [Understanding default redirect URI and redirect URI pattern](./UserAuthentication/implementation.md#understanding-default-redirect-uri-and-redirect-uri-patterns)
4. [Implementing user authentication using standard OAuth2 libraries](./UserAuthentication/implementation.md#standard-oauth2-libraries)


## Server to server authentication

If your application needs to read or modify data owned by your application or your organization, you can do so by using a server to server authentication credential. Server to server authentication credentials only allow you to access your application's data or your organization's data, and therefore, do not require an end user to sign in. 

View our guide on server to server authentication credentials -
1. Understanding OAuth 2.0 `client_credentials` grant type (2-legged OAuth)
2. Learning about the different Server to server authentication credential types
3. Setting up the credential - credential name, product profiles
4. Implementing server to server authentication using standard OAuth2 libraries
5. Rotating client secrets programmaticly


## API key authentication 

If your application needs to integrate with an Adobe offering that supports unauthenticated workflows (does not require access tokens), you can do so by using API key credential. The API key credential identifies your application to Adobe servers and can help accept/reject requests originating from certain domains that you configure during credential setup.

View our guide on API key credentials - 
1. Understanding different uses of the API key credential
2. Setting up the credential - allowed origins

