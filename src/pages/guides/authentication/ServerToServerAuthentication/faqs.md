# FAQs

### Q. Will my Adobe application stop working immediately?
A. No - any existing application using the Service Account (JWT) credential will continue to work until Jan 1, 2025. See [deprecation timelines](./migration.md#deperecation-timelines).


### Q. By when do I need to migrate to the new credential? 
A. You must migrate your application to use the new OAuth Server-to-Server credential before Jan 1, 2025 to ensure your application does not face any downtime. See [migration guide](./migration.md#migration-overview)


### Q. We are using the Service Account (JWT) credential in a 3rd party application that was not developed by us. How should we migrate such application?
A. The organization that developed the application will need to add support to use the new credential. Please reach out to the concerned company or organization.


### Q. We are a company or organization that develops applications using Service Account (JWT) credentials that are installed by Adobe customers. What do we need to do?
A. Until May 1, 2024, your customers can still create Service Account (JWT) credentials to use your application. However, any existing or new customers of your application must switch to use the before credential by Jan 1, 2025. 

Therefore, we recommend that you enhance your application before May 1, 2024. You must add support to use the new credential and support for customers to migrate from the old credential to the new credential. 


### Q. We can currently create new Service Account (JWT) credentials even though they are marked as deprecated. Is it recommended? 
A. No, it is not recommneded to create any new Service Account (JWT) credentials. All Service Account (JWT) credentials old or new will stop working after Jan 1, 2025. We recommend that you avoid having to migrate your application again, and simply use the new OAuth Server-to-Server credential from the beginning. See our [implementation guide](./implementation.md).


### Q. What happens if we do not migrate our application by Jan 1, 2025?
A. Projects on the Developer Console still containing any Service Account (JWT) credentials will be 'frozen' after Jan 1, 2025. This will disable certificate rotation for your application or any other action to modify the project or the credential. The ability to migrate will, however, still be available. Once you migrate your application, the project will be 'unfrozen' again. 


### Q. Why do I have to switch to the new credential for my existing applications?
A. The Service Account (JWT) credentials use public certificate and private key pairs that expire every year. Because of this your organization has to rotate those certificates each year. We recommend moving to the new OAuth Server-to-Server credential to solve the problems of certificate rotation, once and for all. See our [migration guide](./migration.md).


### Q. Can I programmatically rotate certificates for Service Account (JWT) credential?
A. No such ability is available currently. There are no plans to add such ability either. Instead we recommend switching to the new credential that do not use expring certificates and also allow you to [rotate client secrets](./implementation.md#rotating-client-secrets) through the UI and API ([programmatically](./implementation.md#rotating-client-secrets-programmaticaly)). 


### Q. I do not know which applications are using which projects. Can Adobe help me identify the application that uses a given project?

Unfortunately, Adobe cannot tell which custom integration or application is using a given project. This information is solely available with the customer. Each project was created by a developer/admin within the customer's organization. The same developer/admin is in the best position to identify which application uses the given project.


### Q. How can I identify the developer/admin in my organization who set up the Project or the certificate key pair?
A. A good starting point to identify the developers/admins who worked on a project is by looking at who created or last modified the Project on the Project overview screen. Furthermore, the Project Activity Logs, retained for up to a year, show a more granular view of who made what changes to a Project. Note: Information about the Project's creator may be missing for historical projects.


### Q. How can I verify if the Project on the Dev Console is actually being used?
A. Visit the Service Account (JWT) credential overview page and look at the last access token generated at timestamp. This will tell you when was this project and credential last used to generate an access token. You can also visit the Insights tab in a Project to see recent activity (API calls, Events Delivered, etc.) involving the credentials contained in the Project. See our documentation on [Insights](../insights.md) to know more.


### Q. Can Adobe migrate applications for us?
A. Unfortunately, Adobe has no information on or access to your custom integrations and applications. Therefore, you would need to carry out the activity to identify and migrate your applications.


### Q. How can I look at all the Projects that have a Service Account (JWT) credential?
A. To view all the Projects with a Service Account (JWT) credential, apply the filter 'Attention Required' > 'Has Service Account (JWT) credential' on the list of Projects screen.


### Q. What are the benefits of using the OAuth Server-to-Server credential?
A. You can read more about OAuth Server to Server credentials in our [implementation guide](./implementation.md). You can also view the comparision between the OAuth Server to Server credential and the Service Account (JWT) credential [here](./migration.md#why-oauth-server-to-server-credentials). 


### Q. Can I programmatically rotate client secrets for OAuth Server-to-Server credential?
A. Absolutely. View our guide on rotating client secrets programmatically [here](./implementation.md#rotating-client-secrets-programmaticaly).


### Q. What should I do if my client secret gets leaked?
A. We recommend that you immediately [rotate](./implementation.md#rotating-client-secrets) your application's client secret and reach out to Adobe customer support if you wish to invalidate any existing tokens.