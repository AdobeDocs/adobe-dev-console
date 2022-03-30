# Projects overview

All development work in Adobe Developer Console is done as part of a project. A project may include one or multiple products, as well as a combination of APIs, events, runtime, and plugins. 

## Developer vs enterprise projects

Projects are a common framework within both developer and enterprise organizations. Projects belonging to an enterprise organization are visible to other members of the organization, whereas projects belonging to a developer organization are visible only to the individual to whom the organization belongs.

Use the org switcher to view the organizations to which you belong and easily switch between them.

![Organization switcher on the Console home screen.](../../images/switch-organizations.png)

<InlineAlert slots="text"/>

**Note:** For enterprise organizations, you must be a system administrator or developer in order to create projects for your organization. For information on how to manage developers in the admin console, see the documentation on [managing developers](https://helpx.adobe.com/enterprise/using/manage-developers.html).

## Create a new Project

### Empty Projects

Think of an empty project as an open canvas or "blank slate" into which you can add events, runtime, plugins, APIs, and more to create custom applications.

To get started, follow the steps provided in the guide for [creating an empty project](projects-empty.md).

### Templated Projects

In order to streamline the creation of projects, Adobe Developer Console provides templates that you can use to get up and running quickly. 

**Note:** Templated projects are currently only available for enterprise organizations.

To get started, follow the steps provided in the guide for [creating a templated project](projects-template.md).

## View all Projects

The **Projects** screen provides an overview of the projects that have been created by your organization. If you are part of an enterprise organization, this includes all projects that you have access to, not just projects that you have created.

Each project is shown on a card that includes the title of the project, the last modified date, and the number of workspaces, where applicable.

![All Projects screen (card view)](../../images/projects-card-view.png)

You can use the sort functionality to change the order in which projects are displayed or select the list view to see your projects in a list rather than displayed as cards.

![All Projects screen (list view)](../../images/projects-list-view.png)

From the **Projects** screen, you can also begin working on a new project by selecting **Create new project**.

### Read Only view

As a member of an enterprise organization, you may not have been granted access to all of the services licensed by your organization. For this reason, you may see a *Read Only* tag on certain projects or workspaces within a templated project.

Projects or workspaces marked as *Read Only* are still visible to you, but certain actions, such as downloading, editing, copying client secrets, or initiating the approval workflow will be greyed out and inaccessible to you.

If you believe you are seeing a *Read Only* tag in error, or would like to gain access to certain services and product profiles, please work with your organization's administrators for access.

## Delete a Project

**Deleting a project is permanent**. Before you can delete a project you must remove all services and credentials from it. Certain services (Adobe I/O Runtime, Plugins, etc.) cannot yet be removed from a project, and therefore, disallow a project deletion.


## Project Access and view Project Activity Log

Any user in your organization who has access to the Developer Console and has access to the set of product profiles used in a project can view, edit, and delete that project.

However, all such user activity on the Dev Console is captured in a project Activity log and serves as a record of "who did what and when?" for the organization to use. 

Activity Log in a project is retained for 3 months and allows you to export the records as CSV if you wish to store it further. 

![Project Activity Log](../../images/project-activity-log.png)

<InlineAlert slots="text"/>

Note: Activity log is currently only available to enterprise and teams organizations.

## Project approval

Once you have completed development on your project, your application is ready for approval. There are four different approval processes within Adobe Developer Console, depending on the type of application that you have built. 

1. Self-service push to production for OAuth credential
2. Approval process for OAuth credentials
3. Approval process for App Builder applications
4. Review process to publish plugins

To read more about the approval process, visit the [project approvals](approval.md) documentation.

### Beta users

When building a project containing OAuth credentials, Console enables you to select and manage a group of beta users, giving them access to your integration while it is still `In Development`. To learn more, read the [beta users overview](beta-users.md).


