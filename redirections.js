/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

(() => {
  let prefixPath =
    window.location.host.indexOf("localhost") === 0
      ? ""
      : "developer-console/docs/";
  let redirectPath = "";

  if (
    (window.location.hash !== "" &&
      window.location.pathname === "/" &&
      window.location.host.indexOf("localhost") === 0) ||
    (window.location.hash !== "" &&
      window.location.pathname === "/developer-console/docs/" &&
      window.location.host.indexOf("localhost") < 0)
  ) {
    switch (window.location.hash) {
      case "#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/AuthenticationGuide.md":
        redirectPath = prefixPath + "guides/authentication/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/AuthenticationGuide.md":
        redirectPath = prefixPath + "guides/authentication/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/APIKeyIntegration.md":
        redirectPath = prefixPath + "guides/authentication/APIKeyIntegration/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/OAuthIntegration.md":
        redirectPath = prefixPath + "guides/authentication/OAuthIntegration/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/ServiceAccountIntegration.md":
        redirectPath = prefixPath + "guides/authentication/ServiceAccountIntegration/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/OAuth/OAuth.md":
        redirectPath = prefixPath + "guides/authentication/OAuth/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/OAuth/Scopes.md":
        redirectPath = prefixPath + "guides/authentication/OAuth/Scopes/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/OAuth/samples/samples.md":
        redirectPath = prefixPath + "guides/authentication/OAuth/samples/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/JWT/JWT.md":
        redirectPath = prefixPath + "guides/authentication/JWT/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/JWT/JWTCertificate.md":
        redirectPath = prefixPath + "guides/authentication/JWT/JWTCertificate/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/JWT/Scopes.md":
        redirectPath = prefixPath + "guides/authentication/JWT/Scopes/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/JWT/samples/samples.md":
        redirectPath = prefixPath + "guides/authentication/JWT/samples/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/Resources/Tools/ToolsOverview.md":
        redirectPath = prefixPath + "guides/authentication/Tools/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/Resources/Tools/OAuthPlayground.md":
        redirectPath =
          prefixPath + "guides/authentication/Tools/OAuthPlayground/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/Resources/Tools/Postman.md":
        redirectPath = prefixPath + "guides/authentication/Tools/Postman/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/Resources/IMS.md":
        redirectPath = prefixPath + "guides/authentication/IMS/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/Resources/Tools/Postman.md":
        redirectPath = prefixPath + "guides/authentication/Tools/Postman/";
        break;
      case "#!AdobeDocs/adobeio-auth/master/Resources/IMS.md":
        redirectPath = prefixPath + "guides/authentication/IMS/";
        break;
      case "#!AdobeDocs/adobeio-console/master/overview.md":
        redirectPath = prefixPath + "guides/";
        break;
      case "#!AdobeDocs/adobeio-console/master/getting-started.md":
        redirectPath = prefixPath + "guides/getting-started/";
        break;
      case "#!AdobeDocs/adobeio-console/master/insights.md":
        redirectPath = prefixPath + "guides/insights/";
        break;
      case "#!AdobeDocs/adobeio-console/master/credentials.md":
        redirectPath = prefixPath + "guides/credentials/";
        break;
      case "#!AdobeDocs/adobeio-console/master/apis-and-services.md":
        redirectPath = prefixPath + "guides/apis-and-services/";
        break;
      case "#!AdobeDocs/adobeio-console/master/faq.md":
        redirectPath = prefixPath + "support/faq/";
        break;
      case "#!AdobeDocs/adobeio-console/master/support.md":
        redirectPath = prefixPath + "support/";
        break;
      case "#!AdobeDocs/adobeio-console/master/projects.md":
        redirectPath = prefixPath + "guides/projects/";
        break;
      case "#!AdobeDocs/adobeio-console/master/projects-empty.md":
        redirectPath = prefixPath + "guides/projects/projects-empty/";
        break;
      case "#!AdobeDocs/adobeio-console/master/projects-template.md":
        redirectPath = prefixPath + "guides/projects/projects-template/";
        break;
      case "#!AdobeDocs/adobeio-console/master/beta-users.md":
        redirectPath = prefixPath + "guides/projects/beta-users/";
        break;
      case "#!AdobeDocs/adobeio-console/master/approval.md":
        redirectPath = prefixPath + "guides/projects/approval/";
        break;
      case "#!AdobeDocs/adobeio-console/master/plugin-project.md":
        redirectPath = prefixPath + "guides/plugins/";
        break;
      case "#!AdobeDocs/adobeio-console/master/plugin-distribution.md":
        redirectPath = prefixPath + "guides/plugins/plugin-distribution/";
        break;
      case "#!AdobeDocs/adobeio-console/master/plugin-update.md":
        redirectPath = prefixPath + "guides/plugins/plugin-update/";
        break;
    }
    window.location.href =
      "http://" + window.location.host + "/" + redirectPath;
  }
})();
