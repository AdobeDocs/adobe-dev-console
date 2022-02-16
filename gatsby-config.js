/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    pages: [
      {
        path: "/developer-console",
        title: "Developer Console"
      },
      {
        path: "support/index.md",
        title: "Support"
      },
      {
        path: "guides/authentication/index.md",
        title: "View Authentication Guide"
      },
      {
        path: "guides/index.md",
        title: "View Docs"
      }
    ],
    subPages: [
      {
        path: "guides/index.md",
        title: "Developer Console",
        pages: [
          {
            path: "guides/getting-started.md",
            title: "Getting Started"
          },
          {
            path: "guides/projects/index.md",
            title: "Projects",
            pages: [
              {
                path: "guides/projects/projects-empty.md",
                title: "Create an Empty Project"
              },
              {
                path: "guides/projects/projects-template.md",
                title: "Create a Templated Project"
              },
              {
                path: "guides/projects/approval.md",
                title: "Projects Approval"
              },
              {
                path: "guides/projects/beta-users.md",
                title: "Beta Users"
              }
            ]
          },
          {
            path: "guides/plugins/index.md",
            title: "Plugins",
            pages: [
              {
                path: "guides/plugins/plugin-distribution.md",
                title: "Distribute a Plugin"
              },
              {
                path: "guides/plugins/plugin-update.md",
                title: "Update a Plugin"
              }
            ]
          },
          {
            path: "guides/services/index.md",
            title: "Services",
            pages: [
              {
                path: "guides/services/services-add-api-jwt.md",
                title: "Add API using Service Account (JWT)"
              },
              {
                path: "guides/services/services-add-api-key.md",
                title: "Add API using API Key"
              },
              {
                path: "guides/services/services-add-api-oauth.md",
                title: "Add API using Oauth"
              },
              {
                path: "guides/services/services-add-event.md",
                title: "Add Events"
              },
              {
                path: "guides/services/services-enable-runtime.md",
                title: "Enable Runtime"
              }
            ]
          },
          {
            path: "guides/credentials.md",
            title: "Credentials"
          },
          {
            path: "guides/insights.md",
            title: "Insights"
          },
          {
            path: "guides/apis-and-services.md",
            title: "APIs and services"
          },
          {
            path: "guides/public-profile.md",
            title: "Public Profile"
          },
          {
            path: "guides/quota.md",
            title: "Quota"
          }
        ]
      },
      {
        path: "guides/authentication/index.md",
        title: "Authentication",
        pages: [
          {
            path: "guides/authentication/APIKeyIntegration.md",
            title: "API Key Integration"
          },
          {
            path: "guides/authentication/OAuthIntegration.md",
            title: "OAuth Integration"
          },
          {
            path: "guides/authentication/ServiceAccountIntegration.md",
            title: "Service Account Integration"
          },
          {
            pages: [
              {
                path: "guides/authentication/OAuth/Scopes.md",
                title: "OAuth Scopes"
              },
              {
                path: "guides/authentication/OAuth/samples.md",
                title: "OAuth Sample Code"
              }
            ],
            path: "guides/authentication/OAuth/index.md",
            title: "OAuth Authentication"
          },
          {
            pages: [
              {
                path: "guides/authentication/JWT/JWTCertificate.md",
                title: "Create a Public Key Certificate"
              },
              {
                path: "guides/authentication/JWT/Scopes.md",
                title: "JWT Metascopes"
              },
              {
                path: "guides/authentication/JWT/samples.md",
                title: "JWT Sample Code"
              }
            ],
            path: "guides/authentication/JWT/index.md",
            title: "JWT (Service Account) Authentication"
          },
          {
            path: "guides/authentication/IMS.md",
            title: "IMS APIs"
          },
          {
            pages: [
              {
                path: "guides/authentication/Tools/OAuthPlayground.md",
                title: "OAuth 2.0 Playground"
              },
              {
                path: "guides/authentication/Tools/Postman.md",
                title: "Postman"
              }
            ],
            path: "guides/authentication/Tools/index.md",
            title: "Tools"
          }
        ]
      },
      {
        path: "support/index.md",
        title: "Support",
        pages: [
          {
            path: "support/faq.md",
            title: "FAQ"
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || "/developer-console/docs/"
};
