#FAQs

### Will my Adobe application stop working immediately?
No - any existing application using the Service Account (JWT) credential will continue to work until Jan 27, 2025. See [deprecation timelines](./migration.md#deperecation-timelines).


### By when do I need to migrate to the new credential? 
You must migrate your application to use the new OAuth Server-to-Server credential before Jan 27, 2025, to ensure your application does not face any downtime. See [migration guide](./migration.md#migration-overview)


### We are using the Service Account (JWT) credential in a 3rd party application we did not develop. How should we migrate such applications?
The company or organization that developed the application must add support to use the new credential. Please reach out to the concerned company or organization.


### We are a company or organization that develops applications using Service Account (JWT) credentials that Adobe customers install. What do we need to do?
Until June 3, 2024, customers can still create Service Account (JWT) credentials to use your application. However, any existing or new customers of your application must switch to using the before credential by Jan 27, 2025.

Therefore, we recommend enhancing your application before June 3, 2024. You must add support to use the new credential and support for customers to migrate from the old credential to the new credential.


### We can currently create new Service Account (JWT) credentials even though they are marked as deprecated. Is it recommended?
No, creating any new Service Account (JWT) credentials is not recommended. All Service Account (JWT) credentials, old or new, will stop working after Jan 27, 2025. We recommend you avoid migrating your application again and use the new OAuth Server-to-Server credential from the beginning. See our [implementation guide](./implementation.md).


### What happens if we do not migrate our application by Jan 27, 2025?
Projects on the Developer Console still containing any Service Account (JWT) credentials will be 'frozen' after Jan 27, 2025. This will disable certificate rotation for your application or any other action to modify the project or the credential. The ability to migrate will, however, still be available. Once you migrate your application, the project will be 'unfrozen' again. 


### Why do I have to switch to the new credential for my existing applications?
The Service Account (JWT) credentials use a public certificate and private key pairs that expire yearly. Because of this, your organization has to rotate those certificates each year. We recommend moving to the new OAuth Server-to-Server credential to solve the problems of certificate rotation once and for all. See our [migration guide](./migration.md).


### Can I programmatically rotate certificates for Service Account (JWT) credential?
No such ability is available currently. There are no plans to add such ability either. Instead, we recommend switching to the new credential that does not use expiring certificates and allows you to [rotate client secrets](./implementation.md#rotating-client-secrets) through the UI and API ([programmatically](./implementation.md#rotating-client-secrets-programmatically)). 


### I need to find out which applications are using which projects. Can Adobe help me identify the application that uses a given project?

Unfortunately, Adobe cannot tell which custom integration or application uses a given project. This information is solely available to the customer. Each project was created by a developer/admin within the customer's organization. The same developer/admin is best positioned to identify which application uses the given project.

### How can I identify the developer/admin in my organization who set up the Project or the certificate key pair?
A good starting point to identify the developers/admins who worked on a project is by looking at who created or last modified the Project on the Project overview screen. Furthermore, retained for up to a year, the Project Activity Logs show a more granular view of who made what changes to a Project. Note: Information about the Project's creator may be missing for historical projects.


### How can I verify if the Project on the Dev Console is actually being used?
Visit the Service Account (JWT) credential overview page and look at the last access token generated at timestamp. This will tell you when this project was last used to generate an access token. You can also visit the Insights tab in a Project to see recent activity (API calls, Events Delivered, etc.) involving the credentials contained in the Project. See our documentation on [Insights](../insights.md) to know more.


### Can Adobe migrate applications for us?
Adobe has no information on or access to your custom integrations and applications. Therefore, you must carry out the activity to identify and migrate your applications.


### How can I look at all the Projects with a Service Account (JWT) credential?
To view all the Projects with a Service Account (JWT) credential, apply the filter 'Attention Required' > 'Has Service Account (JWT) credential' on the list of Projects screen.


### What are the benefits of using the OAuth Server-to-Server credential?

You can read more about OAuth Server to Server credentials in our [implementation guide](./implementation.md). You can view the comparison between the OAuth Server to Server credential and the Service Account (JWT) credential [here](./migration.md#why-oauth-server-to-server-credentials).


### Can I programmatically rotate client secrets for OAuth Server-to-Server credentials?
Absolutely. View our guide on rotating client secrets programmatically [here](./implementation.md#rotating-client-secrets-programmatically).


### What should I do if my client secret gets leaked?
We recommend immediately [rotating your application's client secret](./implementation.md#rotating-client-secrets) and contacting Adobe customer support if you wish to invalidate any existing tokens.
