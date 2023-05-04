# Migrating from Service Account (JWT) credential to OAuth Server-to-Server credential

The Service Account (JWT) credentials have been deprecated in favor of the new OAuth Server-to-Server credentials. 

The new OAuth Server-to-Server credentials simplify all aspects of application development - experimentation, implementation, and maintenance. See the section on [Why OAuth Server-to-Server credentials?](#why-oauth-server-to-server-credentials) below to learn more.

While the Service Account (JWT) credentials have been marked as deprecated, they will continue to work until **Jan 1, 2025**. Therefore you must migrate your application or integration to use the new OAuth Server-to-Server credential before Jan 1, 2025. See the section on [deprecation timelines](#deperecation-timelines) below to learn more.

Migrating your applications to the OAuth Server-to-Server credential is a simple two-step process that enables a zero downtime migration for your applications and integrations. We recommend that your read our [migration guide](#migration-overview) below to familiarize yourself with the migration process. 

If you have more questions, be sure to check out our [frequently asked questions](#faqs) or visit the Adobe Developer Console [forums](https://experienceleaguecommunities.adobe.com/t5/adobe-developer-console/ct-p/adobe-io-console).

## Why OAuth Server-to-Server credentials?

The new OAuth Server-to-Server credentials rely on the OAuth 2.0 client credentials grant. Therefore, you can use industry standard [OAuth 2.0 libraries](./implementation.md#generating-access-tokens-using-standard-oauth2-libraries) to implement access token generation in your application. 

Unlike the Service Account (JWT) credential, the new credential does not use a public certificate and private key pair to generate access tokens. As an application developer, this means that you do not have to periodically rotate the public private certitificate key pairs when they expire. Also, the credential setup process is greatly simplified and you do not have to download and save the private key on your machine. 

Lastly, while the new OAuth Server-to-Server credential do not use expiring certificates, they still allow for client secret rotation through the UI and API. Read more about [rotating secrets programmatically](./implementation.md#rotating-client-secrets-programmaticaly) in our guide on [rotating client secrets](./implementation.md#rotating-client-secrets).


|                                                      | OAuth Server-to-Server credential                                                                                         | Service Account (JWT) credential                                                                                   |   |   |
|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Expring certificates need to be replaced every year? | This credential does not use public certificates or private key pairs. You are not forced to rotate certificates every year. | You need to rotate the public certificate and private key pair every year. |
| Generating access tokens for experimentation         | You can generate an access token for quick experimentation with a [one-click button](./implementation.md#generate-access-tokens) on the Developer Console.              | Generating access tokens is a 3-step process spanning across Developer Console UI and your command-line terminal. |
| Generating access tokens in your application         | You can use [standard OAuth 2.0 libraries](./implementation.md#generating-access-tokens-using-standard-oauth2-libraries) to programmatically generate access tokens in your application.| You can implement acess token generation programmatically by reading our documentation. |
| Rotating client secrets programmatically             | You can rotate client secrets on-demand through the Dev Console UI and API. [Learn more](./implementation.md#rotating-client-secrets-programmatically).| You can rotate public certificate and private key pair manually through the UI. |

## Deperecation Timelines


<InlineAlert slots="text"/>

Your applications using the Service Account (JWT) credentials will stop working after Jan 1, 2025.


| | May 1, 2023 - Apr 30, 2024 | May 1, 2024 - Dec 31, 2024 | Jan 1, 2025 (end of life) |
|-|------------------------------|---------------------------------|-------------------------------|
| Existing applications using a Service Account (JWT) credential |   Existing applications using the Service Account (JWT) credential will continue to work. |   Existing applications using the Service Account (JWT) credential will continue to work.  |  **Existing applications cannot refresh expiring certificates after Jan 1 '25 and will stop working**.  |
| New applications creating a Service Account (JWT) credential   |  A new Service Account (JWT) credential can be created and added to the project.  |  A new Service Account (JWT) credential **cannot** be created or added to the project.  |  A new Service Account (JWT) credential **cannot** be created or added to the project.  |

## Migration Overview

The migration to the OAuth Server-to-Server credential is a simple process that enables a zero downtime migration for your application. You can follow along the steps below to you migrate your application.

## Preparation: Find out which applications are using the Service Account (JWT) credentials

To find out which of your Adobe applications and integrations are using the Service Account (JWT) credential

1. Login to the Adobe Developer Console and open the [Projects Tab](https://developer.adobe.com/console/projects).

2. On the filtering menu on the left side, select the filter `Attention Required` > `Has Service Account (JWT) credential`. This will show you all the projects that have a Service Account (JWT) credential.

3. Check out the project descriptions set by your team member, to understand which application is using a given project. To identify project maintainers in your organization, you can check who created or last modified that project or the project's activity logs.

For each application/project that you have identified perform the steps below. If a project is not in use, we recommend deleting the project or the Service Account (JWT) credential in the project.

Note: you do not have to worry about auto generated projects. Those will automatically migrated by Adobe during the migration window.

### Step 1: Add the new credential to your project and update your application

Once you have identified the application that needs to be updated and its corresponding project on the Developer Console. The first step is to add the new credential to your project, so that you can begin using the new credential to generate access tokens and update your application.

<InlineAlert slots="text"/>

Adding an equivalent OAuth Server-to-Server credential will not impact your running application. Your running application can still use the Service Account (JWT) credential to generate access tokens. 

1. Login to the Developer Console and navigate to your project. From the left side nav, open the Service Account (JWT) credential tab and view the migration card.

2. On the migration card, click the button to add an equivalent OAuth Server-to-Server credential. This will add an OAuth Server-to-Server credential to your project and start the migration. Note: during the migration you cannot add any API or service to your project. Some finer points about the added credential - 

  * The new OAuth Server-to-Server credential has the same client id, technical account, connected APIs and services, scopes, and product profiles as the old Service Account (JWT) credential. 

  * A token generated by the new credential will be identical to one generated by the old credential and will have identical access too.

  * The difference between the two credentials is the token generation mechanism and the use of public certificate and private key pair.

3. Update your application code to start using the new credential to generate access tokens. 

  * At this point, you can use either credentials to generate access tokens. This ensures that your running application can continue generating access tokens using the Service Account (JWT)

  * Meanwhile, you can test the new credential by generating access tokens using the Developer Console UI or a cURL command. We also recommend reading our [implementation guide](./implementation.md) that points to several [standard OAuth 2.0 libraries](./implementation.md#generating-access-tokens-using-standard-oauth2-libraries) to generate access tokens programmatically.

  * At this point you can make code changes to your application and deploy it. Because both you credentials work and you can use either to generate an access tokens, you can deploy your updated application to test, staging, and even production environments. 


### Step 2: Review timestamps to confirm replacement and delete old credential

Once you have updated your application and deployed it to production, the next step is to review whether your application has stopped using the old credential completely. And if so, delete the old credential to complete the migration.

<InlineAlert slots="text"/>

Step 2, once completed, will complete the migration and cannot be rolledback. We recommend that developers pay attention to the prompts on the UI and exercise care when performing this step.


1. Login to the Developer Console and navigate to your project. From the left side nav, open the Service Account (JWT) credential tab and view the migration card.

2. On the migration card, click the button to review timestamps and delete old credential. This will launch a dialog that walks you through the timestamp and credential usage of your application. Based on the status of the two checks (listed below), the UI displays will prompt you the recommended action.

   * Did your application generate access tokens using the new credential more recently than the old credential?

   * Has it been at least 24 hours since the last time an access token was generated using your old credential?
   
3. Once you are sure that you have replaced the old credential successfull, the dialog will take you to the last step of deleting the old credential. To confirm this step you must type in the project name to confirm your intentions. Note: once completed, this step cannot be rolledbacked.

### Cancelling Migration

During the migration you cannot add any APIs or other services to the project. Furthermore, you cannot yet rotate client secrets for the OAuth Server-to-Server credential. 

If you need to add other services or disable the OAuth Server to Server credential in case of a client secret leak - you can cancel the migration.

Canceling the migration will delete the OAuth Server-to-Server credential from your project. If your application is already using the new credential it will stop working once you cancel the migration.

### FAQs

