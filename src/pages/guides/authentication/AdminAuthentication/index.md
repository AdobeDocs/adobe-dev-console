# Admin authentication

Admin authentication enables partner-built apps to read and modify Adobe enterprise customer data with their explicit consent. 

If you are an Adobe Technology Partner Program (TPP) partner and your application needs to read or modify data owned by an Adobe enterprise customer organization, you can use an Admin authentication credential. 

However, before your application can access customer data, an administrator from the customer’s organization must explicitly grant consent to your application and assign relevant product profiles. 

Note: The admin always remains in control and can modify the assigned product profiles or revoke your app's consent at any time.

<InlineAlert slots="text"/>

Admin authentication and the Enterprise Web App credential is only available to Adobe Technology Partner Program (TPP) partners.


## Whose data can you access with Admin authentication?

Admin authentication enables partner-built apps to read and modify Adobe enterprise customer data. Previously, enterprise customer data could only be manipulated through server to server authentication. Therefore, a customer had to build the app themselves or plug in their server-to-server credentials in partner-built apps. 

With Admin authentication a partner application can use a single credential, yet multiple customers can install the app. The customer no longer needs to supply their credentials to partner apps, thereby, strengthening their security posture. Furthermore, the partner apps built with Admin authentication are click-to-install apps which can be installed without the help of an IT department on the customer organization.

To better understand the nuances of admin authentication, let's compare it to other supported authentication types.

|                                 | Who builds the app?              | What data can the app access?  | How is data access governed?                                                                                                                                                      |
|---------------------------------|----------------------------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Admin authentication            | Adobe Technology Partner Program partner | Adobe enterprise customer data | Customer admin can limit data access using product profiles. The customer admin needs to consent to the app first. The customer admin can revoke consent at any time.             |
| Server to server authentication | Adobe enterprise customer        | Adobe enterprise customer data | Admins and developers can limit data access using product profiles. Data access can be removed at any time by removing product profiles or deleting the project.               |
| User authentication             | Adobe partner                    | Adobe end user data            | The app requests access to data by requesting specific scopes. The Adobe end user needs to consent to the app and the list of scopes to grant access to the app. The user can revoke consent at any time. |


## Enterprise Web App credential

Adobe supports the Enterprise Web App credential for admin authentication, allowing partners to build click-to-install applications that interact securely with Adobe enterprise customer data.

Once a customer admin installs the app and provides consent to it, a technical account is set up in the customer org and linked to the partner app. The customer admin can control what data the partner app can access by managing the product profiles assigned to the technical account. Meanwhile, the partner app can generate access tokens for this technical account by using its own client id and secret.

To safeguard customer data, the Enterprise Web App credential requires the partner app to have a secure backend server. The backend server is responsible for implementing the security features of credential and generating access tokens.

### How does it work?

The following diagram depicts the high level workflow through which a partner app can generate access tokens for the technical accounts in customer orgs.

![](../../../images/enterprise-web-app-generate-access-token-uml.png)

1. The workflow starts when the customer admin visits the partner app and clicks on the Connect with Adobe button to connect their Adobe organization to the partner app.
2. The customer admin is redirected to the Adobe IMS consent screen to provide consent to the partner app. Once the admin consents to the partner app to access their org's data, a technical account is created in the customer organization.
3. After the admin provides consent, the admin is redirected back to the partner app. The redirect URL was supplied by the partner during Enterprise Web App credential set up. 
4. The partner app receives the redirect and verifies that it came from Adobe by validating the `id_token`, `state`, and `nonce` parameters in the redirect. 
5. If verification passes, the partner app links the customer org to the logged in account. At this point, the partner app can use its `client_id` and `client_secret` and the customer `org_id` to generate access tokens.
6. Finally, the customer admin has completed the consent workflow and connected their Adobe org to the partner app. The customer admin can now navigate to the [Adobe Exchange manage page](https://exchange.adobe.com/manage) and assign product profiles to the newly set up technical account.

<InlineAlert slots="text"/>

Note: The customer admin can visit the [Adobe Exchange manage page](https://exchange.adobe.com/manage) to revoke consent to the partner app at any time. After the admin revokes consent, the partner app can no longer generate access tokens on this customer's behalf. All existing tokens will stop working within an hour.


## Development Next Steps

1. Read the [implementation guide](implementation.md) to start implementing the Enterprise Web App credential.
2. Read the [API Reference](ims.md) to view details about the token generation request, consent URL parameters, and supported parameters & error codes in the redirect.
3. Read the [submission guide](https://www.adobe.com/go/dd_ExperienceCloud_Submissions) to submit your app for Adobe review.