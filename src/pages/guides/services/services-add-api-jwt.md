# Add API to project using Service Account (JWT)

Adding an API to an empty project is the same whether you are working in a personal or enterprise project. Adding an API to a templated project is similar, with one small variation: APIs are added to individual workspaces, not to the project as a whole.

To begin adding an API from within a templated project, first select the appropriate workspace to open the *Workspace overview*. Then, select **+ Add Service** in the left navigation and choose **API** from the dropdown. 

In an empty project, select **+Add to Project** in the left navigation of the *Project overview* and then choose **API**, or select **Add API** from the quick start buttons.

![](../../images/services-add-to-project.png)

## Add an API

Using REST APIs allows your application to make calls to Adobe services and products. The *Add an API* dialog shows a list of available services with the default *View by* setting to show only those services available to you.

<InlineAlert slots="text"/>

Many services are only available through paid licenses or subscriptions. Licenses and subscriptions can refer to either your organization or your personal licenses if you are building a personal project. For this reason, if you select "All" from the *View by* dropdown, you may notice that several services appear greyed out in the list. If you believe that you should have access to one of these disabled services, please speak with your system administrator or Adobe sales representative.

![](../../images/services-add-api.png)

Once you have found and chosen an API that you would like to add, select **Next** to begin configuring the API.

![](../../images/services-select-api-jwt.png)

## Configure API

A service account (JWT) integration lets your application call Adobe services on its own behalf, or on the behalf of an enterprise organization. For this type of integration, a JSON Web Token (JWT) must be created that includes your credentials. You will then begin each session by exchanging the JWT for an access token. For more information, please read the [JWT Authentication documentation](../authentication/JWT/index.md).

### Create a new service account (JWT) credential

There are two options for creating the necessary credentials:

1. **Generate a key pair:** Adobe Developer Console generates a public/private key pair for you. This private key is not stored within Console, but it is automatically downloaded to your device.  

    In order to proceed with generating a key pair, choose Option 1 and then select **Generate keypair**.

2. **Upload your public key:** Create your own public/private key pair through terminal and upload your public key. To learn more, see the documentation on [creating a private key and public certificate](../authentication/JWT/JWTCertificate.md).

    To upload your own public key, drag and drop a file from your computer or use *Select a File* to choose the file that you would like to use. Then select **Next** to proceed.

![](../../images/services-api-jwt-create.png)

If you select Option 1 to **Generate a key pair**, immediately upon selecting the **Generate keypair** button, a file is downloaded to your computer containing your private key, as well as all of your app settings. 

If you select Option 2, you will be required to drag and drop or select your public certificate from your computer.

<InlineAlert slots="text"/>

Adobe does not record your private key, therefore you must make sure to securely store it. This includes downloaded private key files from Console or files generated elsewhere.

The public key is now visible, including an option to download the key, upload another public key, or generate another key pair. 

If the selected API configuration is complete, a **Save configured API** button appears in the bottom right corner of the dialog. Selecting **Save configured API** will complete the configuration for the API. You can now proceed to the [API overview](#api-overview) section later in this guide.

Otherwise, please proceed to the next section on [selecting product profiles](#select-product-profiles). 

![](../../images/services-api-jwt-keypair.png)

## Select product profiles

If necessary, you will continue configuring the API by choosing from a list of available product profiles. Your integration's service account will gain access to granular features of the Adobe product based on the product profiles that you select.

As product profiles are selected, they appear in the left navigation under *Product Profiles*. Once you have selected at least one profile, the **Save configured API** button will become available.

Continue selecting all required product profiles and, once complete, select **Save configured API** to complete the configuration.

![](../../images/services-api-jwt-choose-profiles.png)

## API overview

With the API configured, you are redirected to the API overview, providing links to documentation, the ability to download files in order to experiment with the API using Postman, and a dialog allowing you to generate an access token by providing your private key.

You can also elect to remove the API on this screen using the **Remove API** button or, if the API includes product profiles, edit the profiles selected during configuration.

![](../../images/services-api-jwt-added.png)

## Quota usage

Select APIs specify a quota, or fixed allowance, for usage. Often this is tied to trial programs that provide free credentials in order to test out a service. These trials provide a quota that is generous enough to get you up and running. Quota may also be tied to a specific agreement, outlining the amount of quota available and timelines for its use.

For APIs that provide a quota, a *Quota usage* section will appear at the top of the API overview when the API is selected in the left navigation.

For more information on quota usage, please visit the [quota usage overview](../quota.md).

![](../../images/quota-usage.png)

## Generate token

To generate a token, copy and paste your private key into the *Private key* field and select **Generate token**.

![](../../images/services-api-jwt-generate-token.png)

If the private key is correct, an access token will appear along with the ability to **Copy** the token for use.

![](../../images/services-api-jwt-token.png)

## Credentials

Now that you have added an API, you can return to the *Project overview* (or *Workspace overview* in a templated project) at any time to view the details for that API and any other project services you may have added. 

You can select the specific API from the left navigation to view its details or remove the API using the **Remove API** button in the top-right corner.

You can also select the specific credential type from under *Credentials* in the left navigation to view the *Credential details* and perform other actions (generate JWT tokens, copy credential details, retrieve client secrets, etc.) as needed. For more information on accessing credentials, please read the [credentials overview](../credentials.md).

## Insights

Adobe Developer Console automatically generates valuable insights related to API usage for each enterprise project (or individual workspace when working in a templated project), as well as for each personal project, including XD Plugins.

To learn more about insights, begin by reading the [insights overview](../insights.md).

## Next steps

With an API successfully added, you can follow the same workflow steps to add additional APIs, or return to the [services overview](../services/index.md) to select another type of service to add to your project.

If you have completed development on your project and are ready to submit your application for approval, please read the [project approval guide](../projects/approval.md) to get started.