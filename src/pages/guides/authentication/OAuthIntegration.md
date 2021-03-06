# OAuth Connection

If your application needs to access Adobe services or content, you'll need a set of client credentials to authenticate your app and your user, and to authorize access. The type of application you are building will determine the type of client credentials you will need.

To obtain client credentials for an app that accesses services on behalf of an **end-user**, you'll need to create an **OAuth** connection using the [Adobe Developer Console](/console). You can integrate your app with more than one Adobe service.

OAuth allows your end users to sign in to your integration with an Adobe ID. With an OAuth token, your application will be able to access Adobe services or content on behalf of the logged in user.

If your application needs to access Adobe services or content on behalf of an organization (an Adobe enterprise organization), follow the steps for **[Service Account (JWT) Authentication](ServiceAccountIntegration.md)**.

This article will walk you through the steps to set up an **OAuth** connection.

## OAuth connection workflow

### Step 1: Create a project in Adobe Developer Console

Integrations are now created as part of a "project" within Adobe Developer Console. For complete steps to creating a project in Console, begin by reading the [Adobe Developer Console getting started guide](../getting-started.md) and [projects overview](../projects/index.md). 

Once you have created a project, you will be able to add services including APIs, I/O Events, and I/O Runtime.

### Step 2: Add an API to your project using OAuth authentication and authorization

To add an API that uses OAuth authentication and authorization, follow the steps outlined in the guide for [adding an API to a project using OAuth authentication](../services/services-add-api-oauth.md).

When the API has been successfully connected, you will be able to access the newly generated credentials including Client ID and Client Secret.

### Step 3: Try It

Generate an access token using [OAuth 2.0 Playground](./Tools/OAuthPlayground.md)


### Step 4: Integrate OAuth authentication in your application

Read our [extensive guide on OAuth](OAuth/index.md) to integrate OAuth authentication in your application. To see sample applications visit [here](OAuth/samples.md).