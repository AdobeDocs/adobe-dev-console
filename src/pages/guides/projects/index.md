# Projects Overview

All development work in Adobe Developer Console is done as part of a project. The concept of a project corresponds to an application you are building. To use APIs and services in the application, you can simply add those APIs and services to the Project. The project may include one or multiple products, and a combination of APIs, events, runtime, and plugins.

## Projects in an enterprise organization vs personal developer organization

Projects are a common framework within enterprise and personal developer organizations. Projects created under an enterprise organization are owned by the organization and are visible to other organization members. In contrast, projects belonging to a developer organization are visible only to you.

If you are a developer or a system administrator on multiple organizations, you can view the projects that are owned by those organizations. The projects you see on the Developer Console depends on the organization you have currently selected in the [org switcher](../getting-started.md#switching-between-your-organizations). Use the org switcher to view the organizations to which you belong to and easily switch between them.

<InlineAlert slots="text"/>

**Note:** To create projects for enterprise organizations, you must have a system administrator or developer role. For information on managing developers in the admin console, see the documentation on [managing developers](https://helpx.adobe.com/enterprise/using/manage-developers.html).

## Create a New Project

### Empty Projects

Think of an empty project as an open canvas or "blank slate" into which you can add events, runtime, plugins, APIs, and more to create custom applications.

To get started, follow the steps provided in the guide for [creating an empty project](projects-empty.md).

### Templated Projects

To streamline the creation of projects, Adobe Developer Console provides templates that you can use to get started quickly. 

**Note:** Templated projects are currently only available for enterprise organizations.

To get started, follow the steps provided in the guide for [creating a templated project](projects-template.md).

## View All Projects

The **Projects** screen provides an overview of your organization's projects. Suppose you are part of an enterprise organization. In that case, this includes all projects that you have access to and not just projects that you have created.

On the Projects screen, each project is shown as a card. A project card mentions the title of the project, its last modified date, and the number of workspaces it has, where applicable.

![All Projects screen (card view)](../../images/projects-card-view.png)

You can use the sort functionality to change the order in which projects are displayed or select the list view to see your projects in a list rather than shown as cards.


![All Projects screen (list view)](../../images/projects-list-view.png)

You can also begin working on a new project from the Projects screen by selecting **Create New Project**.

### Read Only view

As a member of an enterprise organization, you may not have access to all of the services licensed by your organization. For this reason, you may see a *Read Only* tag on certain projects or workspaces within a templated project.

Although, Projects or workspaces marked as *Read Only* are still visible to you, but certain actions, such as downloading, editing, copying client secrets, or initiating the approval workflow, will be greyed out and inaccessible.

If you believe you are seeing a *Read Only* tag in error, or want access to certain services and product profiles, please work with your organization's administrators for access.

## Delete a Project

Deleting a project is **permanent** and will remove all entites contained within the project - APIs and services, credentials, and workspaces. You can delete a project by visiting the project overview page.

While most projects can be deleted, sometimes a project is related to an application you have published and, therefore, cannot be deleted. 

1. If a project contains an API that was submitted for approval (status: In Review or Approved), then the project cannot be deleted.
2. If an App Builder project has been submitted for approval (status: Pending or Published), then that project cannot be deleted. However, you can always revoke a published app and then delete the project. 

<InlineAlert slots="text"/>

Projects containing plugins cannot be deleted yet. 

## View a Project's Activity Log

Any user in your organization who has access to the Developer Console and has access to the set of product profiles used in a project can view, edit, and delete that project.

However, all modifications to a project on the Developer Console are captured in the project's activity log. The activity log serves as a record of "who did what and when?", enabling an organization to track changes made to a project. 

Changes made to a project are retained as activity logs for **1 year**. You can also export the activity log records as a CSV file, if you wish to store them for longer. 

![Project Activity Log](../../images/project-activity-log.png)

<InlineAlert slots="text"/>

Note: Project Activity logs are currently only available to enterprise and teams organizations.

## Last service activity in a Project

At a glance, the last service activity date informs you when Adobe last recorded activity from your integration or application. This information helps ascertain whether the integration or application using this Project has been active. 

Currently, the Developer Console only records service activity when your integration or application generates access tokens to call Adobe APIs. 

We do not yet track service activity when 
* Your App Builder app action is invoked, nor any other activities of App Builder apps. 
* Your integration calls Adobe APIs or receives events from Adobe I/O Events. However, you can find this information under the [Insights](../insights.md) tab in a Project. 

Also, we do not yet track any service activity for any Creative Cloud app plugins (Adobe Express add-ons, UXP apps, or ZXP apps). Lastly, we do not yet track any service activity for the API key credential.

Note: The Developer Console only records the date of the service activity. Furthermore, the tracked information only serves to inform you about which of your projects were in use and when.

Note: Historical data for service activity before April 15, 2024 is unavailable.

## Project approval

Once you have completed development on your project, your application is ready for approval. There are four different approval processes within Adobe Developer Console, depending on the type of application that you have built. 

1. Self-service push to production for OAuth credential
2. Approval process for OAuth credentials
3. Approval process for App Builder applications
4. Review process to publish plugins

To read more about the approval process, visit the [project approvals](approval.md) documentation.

## Beta users

When building a project containing OAuth credentials, Console enables you to select and manage a group of beta users, giving them access to your integration while it is still `In Development`. To learn more, read the [beta users overview](beta-users.md).


