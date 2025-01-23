# Server to Server authentication

Server to server authentication credentials allow your application's server to generate access tokens and make API calls on behalf of your application itself. 

In the OAuth 2.0 framework, server to server authentication is called 2-legged OAuth. It is called so because, unlike 3-legged OAuth, it involves only two parties - Adobe and your application.

For your application to generate an access token, an end-user does not need to sign in or provide consent to your application. Instead, your application can use its credentials (client id and secrets) to authenticate itself and generate access tokens. Your application can then use the generated access token to call Adobe APIs and services on its behalf.

## Whose data can you access with a server to server credential?

The token generation process for a server to server credential only authenticates your application. Therefore, the generated access token can only be used to read and modify data owned by your application.

For example, you can use the PDF Services API to generate a PDF from an invoice template and a JSON object containing the data you pass to the API. In this case, no user's data was accessed, and the application is manipulating data it already owns or has access to.

Apart from the data owned by the application, a server to server credential can also read and modify data owned by your organization. 

For example, the Adobe Analytics API allows you to pull reporting data for your website using the server to server credential.

When you create a server to server credential on the Adobe Developer Console, only your organization can access its client id and secret. Therefore, when your application generates an access token using those credentials - it can only do so because your organization has supplied the client_id and client_secret to the application. In other words, your application is developed and trusted by your organization; therefore, the application can access your organization's data.

However, no access to data is given out by default. Instead, when you create a server to server credential, you must configure the set of product profiles to be assigned to this credential. These product profiles then govern what data the application can access in your organization. 

You can also modify the set of product profiles by returning to your project on the Adobe Developer Console. As an admin, you can manage the product profiles assigned to different applications by visiting the [Adobe Admin Console](https://adminconsole.adobe.com/) > Users > API credentials tab.

## Server to server credential types

Adobe supports two server to server authentication credentials. These credentials only differ in the way your application generates the access token, the rest of their functioning is similar. 

- [Server to Server authentication](#server-to-server-authentication)
  - [Whose data can you access with a server to server credential?](#whose-data-can-you-access-with-a-server-to-server-credential)
  - [Server to server credential types](#server-to-server-credential-types)
    - [OAuth Server-to-Server credential](#oauth-server-to-server-credential)
    - [Service Account (JWT) credential *(deprecated)*](#service-account-jwt-credential-deprecated)


### OAuth Server-to-Server credential

The OAuth Server-to-Server credential relies on the OAuth 2.0 `client_credentials` grant type to generate access tokens. To generate an access token, your application can make a single HTTP request with your `client_id` and `client_secret` and `scopes`.

As the token generation logic uses your `client_secret`, this logic must be implemented on a secure backend server to prevent malicious actors from accessing your secrets. We recommend using standard OAuth libraries to implement access token generation.

Read our OAuth Server-to-server credential implementation guide -

1. [Generating access tokens using cURL](./implementation.md#generate-access-tokens)
2. [Generating access tokens programmatically using standard OAuth2 libraries](./implementation.md#rotating-client-secrets-programmatically)
3. [Migrating from Service Account (JWT) credentials to OAuth Server-to-Server credentials](./migration.md)
4. [API reference](./ims.md)


### Service Account (JWT) credential *(deprecated)*

<InlineAlert slots="text"/>

The Service Account (JWT) credentials have been deprecated in favor of the OAuth Server-to-Server credentials. Your applications using the Service Account (JWT) credentials will stop working after Jun 30, 2025. You must migrate to the new credential by **Jun 30, 2025**, to ensure your application continues functioning. [Learn more](./ServerToServerAuthentication/migration.md).

Service Account (JWT) credentials rely on the JWT token exchange mechanism to generate access tokens. This credential's details include two secrets a `client_secret` and a `private.key` (part of a public certificate private key pair).

The token generation logic first requires your application to construct a JWT token signed by your private.key. This token is then exchanged for an access token by making an HTTP Request to Adobe Identity Management Services (IMS).

As the token generation logic uses your `client_secret`, this logic must be implemented on a secure backend server to prevent malicious actors from accessing your secrets.

Read our Service Account (JWT) credential implementation guide -

1. [Generating access tokens programmatically](../JWT/index.md)
2. [Migrating from Service Account (JWT) credentials to OAuth Server-to-Server credentials](./migration.md)
