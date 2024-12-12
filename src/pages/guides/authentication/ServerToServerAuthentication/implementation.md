
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

```
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&grant_type=client_credentials&scope={SCOPES}'
```

Your integration can generate access tokens when needed. However, it is a good practice to cache access tokens for reuse until they expire. Integrations should avoid generating a new access token when a previously generated access token has not expired and can be reused. Adobe can throttle your integration if it generates too many access tokens.

Access tokens usually expire in 24 hours. To check the expiry time of an access token, see the `expires_in` field in the API response returned by the above cURL request. Note: The `expires_in` time is in seconds. See [API reference](./IMS.md#fetching-access-tokens).

### Generating access tokens using standard OAuth2 libraries

We recommend using a standard OAuth 2.0 library to implement your application's access token generation logic. The  OAuth community site https://oauth.net has a huge list of community-maintained OAuth2 libraries. Some widely known and maintained OAuth2 libraries from that list are -

1. [PassportJS](https://github.com/jaredhanson/passport) (Node.js)
2. [Spring Security](https://spring.io/projects/spring-security) (Java)
3. [Authlib](https://github.com/lepture/authlib) (Python)
4. View more libraries at https://oauth.net/code/

<InlineAlert slots="text"/>

Using industry-standard libraries is the quickest and most secure way of integrating with OAuth. We recommend developers diligently pick the OAuth 2.0 library that works best for their application.

## Rotating client secrets 

The OAuth Server-to-Server credentials provide freedom from automatically expiring certificates used in the Service Account (JWT) credential that must be updated annually. Instead, the OAuth Server-to-Server credential allows you to rotate your client secret as needed. 
  
Rotating your application's client secrets is highly recommended in case of a leak or unauthorized access. Furthermore, rotating client secrets periodically is an industry-standard practice that strengthens your application security posture. 

You can rotate secrets for your credential through the Dev Console UI and [programmatically through the API](#rotating-client-secrets-programmatically).

To rotate client secrets through the UI, follow the steps below on the credential overview screen - 

1. Add a new client secret to your credential .

     ![](../../../images/oauth-server-to-server-credential-add-client-secret.png)

     ![](../../../images/oauth-server-to-server-credential-added-client-secret.png)

2. Update your application to replace your old client secret with the new one you added.

3. Check the client secret last used timestamp to make sure your application is no longer using the old client secret.

     ![](../../../images/oauth-server-to-server-credential-check-client-secret-timestamps.png)

4. Once sure that you have successfully replaced the client secret, you can delete the old client secret.
     ![](../../../images/oauth-server-to-server-credential-delete-old-client-secret.png)
