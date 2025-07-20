# Admin authentication

If you are an Adobe Technology Partner Program partner and your application needs to read or modify the data of an Adobe enterprise customer, you can do so using an admin authentication credential. However, before your application can view or edit the customer's data, a customer admin would need to provide explicit 'consent' to your application.


## Whose data can you access with Admin authentication?

Admin authentication has a mix of elements from the user authentication and server to server authentication types. 

|                                 | Who builds the app?              | What data can the app access?  | How is data access governed?                                                                                                                                                      |
|---------------------------------|----------------------------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Admin authentication            | Adobe Technology Partner Program partner | Adobe enterprise customer data | Customer admin can limit data access using product profiles. The customer admin needs to consent to the app first. The customer admin can revoke consent at any time.             |
| Server to server authentication | Adobe enterprise customer        | Adobe enterprise customer data | Admins and developers can limit data access using product profiles. Data access can be removed at any time by removing product profiles or deleting the project.               |
| User authentication             | Adobe partner                    | Adobe end user data            | The app requests access to data by requesting specific scopes. The Adobe end user needs to consent to the app and the list of scopes to grant access to the app. The user can revoke consent at any time. |


## Enterprise Web App credential

Adobe supports the Enterprise Web App credential to perform admin authentication. The Enteprise Web App credential enables Adobe Technlogoy Partner Program partners to build click-to-install applications that work with Adobe enterprise customer data.

The Enterprise Web App credential enables partner application to generate access tokens on behalf of an Adobe enterprise customer. To do so, the partner application must first obtain consent from a customer admin and then use the its client id and secret to generate access tokens. 

The safety & security of customer data is of utmost importance. Therefore, the partner app must have a secure backend server to implement the security features of the Enterprise Web app credential, including generating access tokens on the backend.

The following diagram depicts the high level workflow through which a partner app can generate access tokens on behalf of customers. 

![](../../../images/enterprise-web-app-generate-access-token-uml.png)


## Next Steps

1. Read our [implementation guide](implementation.md) to understand how to implement the Enterprise Web App credential.
2. View the [API Reference](ims.md) for parameter lists and error codes.
3. Visit the [FAQ](faq.md) for troubleshooting and advanced scenarios.