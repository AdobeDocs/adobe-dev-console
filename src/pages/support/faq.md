# Frequently Asked Questions

This document provides answers to frequently asked questions about Adobe Developer Console. This is a great place to start when troubleshooting a problem with Console. If you are unable to find the answer you're looking for, please refer to the [Support overview](../support/) for additional resources.

## Questions

### Projects

- [Frequently Asked Questions](#frequently-asked-questions)
  - [Questions](#questions)
    - [Projects](#projects)
    - [Services](#services)
    - [App Builder](#app-builder)
    - [Authentication](#authentication)
  - [Answers](#answers)
    - [Why is the service I want to use greyed out?](#why-is-the-service-i-want-to-use-greyed-out)
    - [How do I delete Runtime from my project or workspace?](#how-do-i-delete-runtime-from-my-project-or-workspace)
    - [What is a workspace?](#what-is-a-workspace)
    - [What is the difference between "Project title" and "App name"?](#what-is-the-difference-between-project-title-and-app-name)
    - [What can I do with the App Builder template?](#what-can-i-do-with-the-app-builder-template)
    - [What is required to build an App Builder app?](#what-is-required-to-build-an-app-builder-app)
    - [Why can't I create a project for my organization?](#why-cant-i-create-a-project-for-my-organization)
    - [Why can't I add an XD plugin to my project?](#why-cant-i-add-an-xd-plugin-to-my-project)
    - [Why can't I add Adobe I/O Runtime to my project?](#why-cant-i-add-adobe-io-runtime-to-my-project)
    - [I want to generate my own JWT. How do I do that?](#i-want-to-generate-my-own-jwt-how-do-i-do-that)
    - [Why do I see a Read Only label on some of my projects? Even some that I created?](#why-do-i-see-a-read-only-label-on-some-of-my-projects-even-some-that-i-created)
    - [Why do I see an Auto-generated label on some of my projects?](#why-do-i-see-an-auto-generated-label-on-some-of-my-projects)
    - [How do I know if I should use JWT or OAuth?](#how-do-i-know-if-i-should-use-jwt-or-oauth)
    - [Why can't I change the name of my App Builder app?](#why-cant-i-change-the-name-of-my-app-builder-app)
    - [Where did my integrations and plugins go?](#where-did-my-integrations-and-plugins-go)
    - [Where can I find the sample code for OAuth authentication?](#where-can-i-find-the-sample-code-for-oauth-authentication)
    - [How to use the private key for generating a JWT?](#how-to-use-the-private-key-for-generating-a-jwt)
    - [What do Default Redirect URI and the Redirect URI Pattern mean?](#what-do-default-redirect-uri-and-the-redirect-uri-pattern-mean)

### Services

* [Why is the service I want to use greyed out?](#why-is-the-service-i-want-to-use-greyed-out)
* [I want to generate my own JWT. How do I do that?](#i-want-to-generate-my-own-jwt-how-do-i-do-that)
* [How do I know if I should use JWT or OAuth?](#how-do-i-know-if-i-should-use-jwt-or-oauth)
* [Why can't I add Adobe I/O Runtime to my project?](#why-cant-i-add-adobe-io-runtime-to-my-project)
* [How do I delete Runtime from my project or workspace?](#how-do-i-delete-runtime-from-my-project-or-workspace)


### App Builder

* [What can I do with the App Builder template?](#what-can-i-do-with-the-app-builder-template)
* [What is required to build an App Builder app?](#what-is-required-to-build-an-app-builder-app)
* [Why can't I change the name of my App Builder app?](#why-cant-i-change-the-name-of-my-app-builder-app)

### Authentication

* [Where can I find the sample code for OAuth authentication?](#where-can-i-find-the-sample-code-for-oauth-authentication)
* [How to use the private key for generating a JWT?](#how-to-use-the-private-key-for-generating-a-jwt)
* [What do Default Redirect URI and the Redirect URI Pattern mean?](#what-do-default-redirect-uri-and-the-redirect-uri-pattern-mean)


## Answers

### Why is the service I want to use greyed out?

Many services require a paid license or subscription to use. If you believe you should have access to a disabled service, please contact your Adobe sales representative.

If you are a member of an enterprise organization, please note that either System Admin or Developer permissions are required to access services. For information on how to manage developers in the admin console, see the [managing developers documentation](https://helpx.adobe.com/enterprise/using/manage-developers.html).  

### How do I delete Runtime from my project or workspace?

Currently it is not possible to remove Runtime from a project. Please create a new project instead.

### What is a workspace?

Workspaces are currently only available when building App Builder apps using a templated project. Workspaces allow you to collaborate with other developers on your team as part of the same larger project, yet with your own dedicated Runtime namespace and credentials. Stage and Production workspaces are provided out of the box, and you are able to add as many workspaces as you need. Please note that the Production workspace will be the one used for submission approval.

### What is the difference between "Project title" and "App name"?

The *Project title* is for internal use only. It is recommended that if you are working in collaboration with multiple developers, you provide a project title that is meaningful and makes the project easy to distinguish from other projects in the organization.

The *App name* is the public-facing name of the application and is used for setting up environments and **cannot be changed once the project is created**. It is important to consider the name of the application as it cannot be altered once it is saved in the set up screen.

### What can I do with the App Builder template?

The App Builder template provides all of the developer tools you need to build Single Page Applications with Adobe's UI toolkit, create microservices, and orchestrate APIs in Adobe Experience Cloud. Collaborate with your team in dedicated workspaces and deploy to your organization seamlessly. App Builder apps need to be approved by your organization's administrators before they can be published.

For more information, please see the [App Builder documentation](https://www.adobe.io/apis/experienceplatform/project-firefly/).

### What is required to build an App Builder app?

Please see the latest [App Builder documentation](https://www.adobe.io/apis/experienceplatform/project-firefly/).

### Why can't I create a project for my organization?

For enterprise organizations, you must be a system administrator or developer in order to create projects for your organization. 

For information on how to manage developers in the admin console, see the [managing developers documentation](https://helpx.adobe.com/enterprise/using/manage-developers.html). 

### Why can't I add an XD plugin to my project?

XD plugins are currently only available to create as personal projects. This feature will be available to enterprise organizations soon. To begin building an XD plugin, visit the [plugins overview](../guides/plugins/). 

Quickly navigate between personal projects and your organization’s projects through the “org switcher” in the top-right corner of Console. For a walk through of Console UI elements, see the [getting started guide](../guides/getting-started).

### Why can't I add Adobe I/O Runtime to my project?	

Adobe I/O Runtime is only available for enterprise customers and requires a license. Please contact your Adobe sales representative for more details.

### I want to generate my own JWT. How do I do that?	

Head to Service Account (JWT) in the Credentials section to see your credential details and generate the JWT.

### Why do I see a Read Only label on some of my projects? Even some that I created?	

A project or workspace is set to *Read Only* if you have not been granted access to all services within the project or workspace. Work with your organization's administrators to determine which services and product profiles you should have access to.

### Why do I see an Auto-generated label on some of my projects?

Certain Adobe products may need to create projects in Developer Console inside your organization. These auto-generated projects are visible, but cannot be edited, by normal organization users. 

### How do I know if I should use JWT or OAuth?	

The authentication method depends on the type of app you're building. To learn more about authentication and authorization, read the [authentication documentation](../guides/authentication/).

### Why can't I change the name of my App Builder app?

The app name is used to generate the URL for your project. We also leverage the app name for the namespace of each workspace.

### Where did my integrations and plugins go?	

Integrations and plugins are now projects. Go to **Projects** in the UI to find all of your existing integrations & plugins. To learn more about projects, read the [projects overview](../guides/projects/).

### Where can I find the sample code for OAuth authentication?

There are currently code samples available for [NodeJS](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-auth-node) and [Python](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-auth-python).

### How to use the private key for generating a JWT?

Please copy the full content of private key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` to generate a correct JWT token.

### What do Default Redirect URI and the Redirect URI Pattern mean?

The default redirect URI is the URL where Adobe Identity Management Service (IMS) will send the authorization code after a successful login with Adobe. You will need that code to make a call to the token endpoint to receive an access token.

The redirect URI pattern is a regex representation of allowed URLs to receive the authorization code. It is used when you pass an optional parameter `redirect_url` with your request.
