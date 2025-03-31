<HeroSimple slots="heading, text"/>

# Adobe Developer Console

The ultimate developer destination to access Adobe APIs & SDKs, listen to near real-time Events, run functions on Runtime, or build plugins or App Builder apps.

## Overview

<DiscoverBlock slots="link, text"/>

[Accessing the Developer Console](getting-started)

This guide will give you a quick overview of the Developer Console and how to gain access.


<DiscoverBlock slots="link, text"/>

[Authentication Guide](/authentication/)

Our authentication guide contains all the information you need to generate access tokens and securely use Adobe services in your application.


<DiscoverBlock slots="link, text"/>

[APIs, Events, and services](/apis-and-services)

Browse all available Adobe APIs, Adobe I/O Events, and other Adobe services that you can integrate into your application.


<DiscoverBlock slots="link, text"/>

[Creating Projects](/projects/)

A project on the Developer Console corresponds to an application you are building. To leverage the power of Adobe products and technologies in your application, simply add those services (APIs, Events, and Runtime) to your project.


<DiscoverBlock slots="link, text"/>  

[Plugins](/plugins/)

Plugins enhance the functionality of Adobe products. End users of the plugins can install them through the marketplace and use them through the product UI. As a developer, you can add a plugin to your project and start building it. 


<DiscoverBlock slots="link, text"/>

[App Builder Project Template](/projects/projects-template)

Quickly start building an App Builder application by using the App Builder project template. App Builder provides all required developer tooling to build a Single Page App with Adobe's UI toolkit or microservices that orchestrate Adobe and non-Adobe APIs and services. [Learn more](https://developer.adobe.com/app-builder/).


## What's new on Adobe Developer Console

### Migrate to the new OAuth Server-to-Server credential

The Service Account (JWT) credentials have been deprecated in favor of the OAuth Server-to-Server credentials. Your applications using the Service Account (JWT) credentials will stop working after Jun 30, 2025. You must migrate to the new credential by **Jun 30, 2025**, to ensure your application continues functioning. [Learn more](./authentication/ServerToServerAuthentication/migration)


### Email alerts

Adobe will send you [email alerts](email-alerts/) whenever there is a potential or ongoing impact on your application. You can [add developers](email-alerts/#managing-email-alert-recipients-in-an-enterprise-organization) in your organization as email alert recipients. You can also [pause email alerts](email-alerts/#managing-noisy-email-alerts) for any projects that are not critical.

### Project Filters

Use Project Filters to narrow your search when looking for a specific project. You can filter by who created or last modified the project, any title or description used in the project, or any programmatic identifiers such as client id, technical accounts, namespaces, etc. You can also quickly view the projects that contain certificates expiring within the next 30 days.

### Project Activity Logs

View who created or last modified a project by visiting the Project overview page. You can also view the exact set of changes made to the project in the last year (who, what, and when) by visiting the [Activity Logs](projects/#view-a-projects-activity-log) tab within the Project.