
# OAuth Server-to-Server credential implementation guide

The following guide goes over finer implementation details for OAuth Server-to-Server credentials. At the end of the guide is a list of recommended industry-standard OAuth2 libraries. Before you proceed, we recommend you become familiar with the server to server authentication credentials in our [server to server authentication guide](./index.md)

## Table of contents

## Setting up the OAuth Server-to-Server credential

Depending on the API or an Event to your project on the Adobe Developer Console, you can select the OAuth Server-to-Server credential. The OAuth Server-to-Server credential is available for all APIs and Events supporting the [Service Account (JWT) credential *(deprecated)*](./index.md#service-account-jwt-credential-deprecated).

### Credential Name

An admin in your organization can manage all OAuth Server-to-Server credentials by visiting the [Adobe Admin Console](https://adminconsole.adobe.com) > Users > API credentials. To find the correct API credential easily on the Admin Console, you can provide your OAuth Server-to-Server credential a name during credential setup.

![](../../../images/oauth-server-to-server-credential-name.png)

This name can be modified later in your project by visiting the OAuth Server-to-Server credential overview page.

![](../../../images/oauth-server-to-server-credential-name-update.png)

### Selecting Product Profiles

Depending on the API or Event you add, you may be asked to select product profiles to assign to your credential. These product profiles govern what data your application can/cannot access in your organization. 

![](../../../images/oauth-server-to-server-credential-product-profiles.png)

The product profile selection works the same way as it does for Service Account (JWT) credentials.

## Generate access tokens

Generating access tokens for experimentation with the OAuth Server-to-Server credential is straightforward. You can use the 'Generate access token' button on the credential overview page or copy the cURL command and use the command line to generate an access token for quick use.

![](../../../images/oauth-server-to-server-credential-generate-access-tokens.png)

### Generating access tokens programmatically

See this cURL request to understand how your integration or application can generate access tokens programmatically. 
