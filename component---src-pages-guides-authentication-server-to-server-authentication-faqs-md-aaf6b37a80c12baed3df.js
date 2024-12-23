"use strict";(self.webpackChunkadobe_dev_console=self.webpackChunkadobe_dev_console||[]).push([[5024],{48421:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return m}});var i=a(58168),n=a(80045),o=(a(88763),a(15680)),r=a(83407);const d=["components"],c={},s={_frontmatter:c},l=r.A;function m(e){let{components:t}=e,a=(0,n.A)(e,d);return(0,o.mdx)(l,(0,i.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"deprecation-of-service-account-jwt-credentials-faqs"},"Deprecation of Service Account (JWT) credentials FAQs"),(0,o.mdx)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#general-faqs"},"General FAQs")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#benefits-of-the-new-credential"},"Benefits of the new credential")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#migration-next-steps"},"Migration next steps")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#migrating-vendor-applications"},"Migrating vendor applications")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#migrating-auto-generated-projects"},"Migrating Auto-generated projects")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#adobe-assistance"},"Adobe assistance"))),(0,o.mdx)("h2",{id:"general-faqs"},"General FAQs"),(0,o.mdx)("h3",{id:"whats-happening"},"What's happening?"),(0,o.mdx)("p",null,"In May 2023, Adobe announced the deprecation and end of life of Service Account (JWT) credentials. This means that any of your integrations or custom applications using a Service Account (JWT) credential will need to migrate to the new OAuth Server-to-Server credential before Jun 30, 2025. "),(0,o.mdx)("h3",{id:"what-is-a-credential"},"What is a credential?"),(0,o.mdx)("p",null,"While building an integration, developers need to call Adobe APIs from their application. To call Adobe APIs, their integration must uniquely identify itself to Adobe. This ensures that only your application can retrieve your data from us.  "),(0,o.mdx)("p",null,"A credential is used to uniquely identify your integration to Adobe. To use an API in an integration, a developer first generates a credential for the API on the Developer Console. She then embeds the credential within her application to generate access tokens. And then finally uses those access tokens to make API calls to Adobe.  "),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/6c8185f9e4f0923388cd05eb2914dda2/5530d/what-is-a-credential.webp 320w","/adobe-dev-console/static/6c8185f9e4f0923388cd05eb2914dda2/0c8fb/what-is-a-credential.webp 640w","/adobe-dev-console/static/6c8185f9e4f0923388cd05eb2914dda2/94b1e/what-is-a-credential.webp 1280w","/adobe-dev-console/static/6c8185f9e4f0923388cd05eb2914dda2/cbeb9/what-is-a-credential.webp 1350w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/6c8185f9e4f0923388cd05eb2914dda2/dd4a7/what-is-a-credential.png 320w","/adobe-dev-console/static/6c8185f9e4f0923388cd05eb2914dda2/0f09e/what-is-a-credential.png 640w","/adobe-dev-console/static/6c8185f9e4f0923388cd05eb2914dda2/bbbf7/what-is-a-credential.png 1280w","/adobe-dev-console/static/6c8185f9e4f0923388cd05eb2914dda2/9ac8b/what-is-a-credential.png 1350w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/6c8185f9e4f0923388cd05eb2914dda2/bbbf7/what-is-a-credential.png",alt:"what is a credential",title:"what is a credential",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h3",{id:"will-my-adobe-integrations-or-applications-stop-working-immediately"},"Will my Adobe integrations or applications stop working immediately?"),(0,o.mdx)("p",null,"No. Any integration or application using the Service Account (JWT) credential will continue to work until June 30, 2025. See ",(0,o.mdx)("a",{parentName:"p",href:"./migration.md#deperecation-timelines"},"deprecation timelines"),". See section on ",(0,o.mdx)("a",{parentName:"p",href:"#migration-next-steps"},"migration next steps"),"."),(0,o.mdx)("h3",{id:"what-is-the-deadline-to-migrate-to-the-new-credential"},"What is the deadline to migrate to the new credential?"),(0,o.mdx)("p",null,"You must migrate your application to use the new OAuth Server-to-Server credential before June 30, 2025, to ensure your application does not face any downtime. See ",(0,o.mdx)("a",{parentName:"p",href:"./migration.md#deperecation-timelines"},"deprecation timelines"),". See ",(0,o.mdx)("a",{parentName:"p",href:"./migration.md"},"migration guide"),"."),(0,o.mdx)("h3",{id:"what-happens-if-we-do-not-migrate-our-application-by-jun-30-2025"},"What happens if we do not migrate our application by Jun 30, 2025?"),(0,o.mdx)("p",null,"Projects on the Developer Console still containing any Service Account (JWT) credentials will be 'frozen' after June 30, 2025. This will disable certificate rotation for your application or any other action to modify the Project or the credential. The ability to migrate will, however, still be available. Once you migrate your application, the Project will be 'unfrozen' again."),(0,o.mdx)("p",null,"Furthermore, Adobe will automatically convert any Service Account (JWT) credential with expired certificates to an OAuth Server-to-Server credential."),(0,o.mdx)("p",null,"Finally, on Mar 1, 2026, all JWT credentials (regardless of certificate validity) will stop working."),(0,o.mdx)("h3",{id:"we-can-currently-create-new-service-account-jwt-credentials-even-though-they-are-marked-as-deprecated-is-it-recommended"},"We can currently create new Service Account (JWT) credentials even though they are marked as deprecated. Is it recommended?"),(0,o.mdx)("p",null,"No. Creating any new Service Account (JWT) credentials is not recommended. All Service Account (JWT) credentials, whether old or new, will stop working after June 30, 2025. We recommend you avoid migrating your application again and use the new OAuth Server-to-Server credential from the beginning. See our ",(0,o.mdx)("a",{parentName:"p",href:"./implementation.md"},"implementation guide"),"."),(0,o.mdx)("h2",{id:"benefits-of-the-new-credential"},"Benefits of the new credential"),(0,o.mdx)("h3",{id:"what-are-the-benefits-of-using-the-oauth-server-to-server-credential"},"What are the benefits of using the OAuth Server-to-Server credential?"),(0,o.mdx)("p",null,"You can read more about OAuth Server-to-Server credentials in our ",(0,o.mdx)("a",{parentName:"p",href:"./implementation.md"},"implementation guide"),". You can view the comparison between the OAuth Server-to-Server credential and the Service Account (JWT) credential ",(0,o.mdx)("a",{parentName:"p",href:"./migration.md#why-oauth-server-to-server-credentials"},"here"),"."),(0,o.mdx)("h3",{id:"can-i-programmatically-rotate-certificates-for-service-account-jwt-credential"},"Can I programmatically rotate certificates for Service Account (JWT) credential?"),(0,o.mdx)("p",null,"No such ability is currently available. There are no plans to add such ability either. "),(0,o.mdx)("p",null,"Instead, we recommend switching to the new credential that does not use expiring certificates and allows you to ",(0,o.mdx)("a",{parentName:"p",href:"./implementation.md#rotating-client-secrets"},"rotate client secrets")," through the UI and API (",(0,o.mdx)("a",{parentName:"p",href:"./implementation.md#rotating-client-secrets-programmatically"},"programmatically"),")."),(0,o.mdx)("h3",{id:"can-i-programmatically-rotate-client-secrets-for-oauth-server-to-server-credentials"},"Can I programmatically rotate client secrets for OAuth Server-to-Server credentials?"),(0,o.mdx)("p",null,"Absolutely. View our guide on rotating client secrets programmatically ",(0,o.mdx)("a",{parentName:"p",href:"./implementation.md#rotating-client-secrets-programmatically"},"here"),"."),(0,o.mdx)("h3",{id:"what-should-i-do-if-my-client-secrets-get-leaked"},"What should I do if my client secrets get leaked?"),(0,o.mdx)("p",null,"We recommend immediately ",(0,o.mdx)("a",{parentName:"p",href:"./implementation.md#rotating-client-secrets"},"rotating your application's client secret")," and contacting Adobe customer support if you wish to invalidate any existing tokens."),(0,o.mdx)("h2",{id:"migration-next-steps"},"Migration next steps"),(0,o.mdx)("h3",{id:"which-integration-or-custom-application-are-we-talking-about-that-must-be-migrated"},"Which integration or custom application are we talking about, that must be migrated?"),(0,o.mdx)("p",null,"There are primarily three categories of integrations and custom applications that must be migrated. "),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Integrations or applications provided by Adobe")," "),(0,o.mdx)("p",{parentName:"li"},"These are integrations provided out-of-the-box by Adobe that require a Service Account (JWT) credential to function. Example: Integration between AEM and Adobe Target, Integration between AEM and Adobe Stock, User sync tool, etc."),(0,o.mdx)("p",{parentName:"li"},"For these integrations Adobe already supports the OAuth Server-to-Server credentials and allows you to migrate. Apart from our general-purpose ",(0,o.mdx)("a",{parentName:"p",href:"./migration.md"},"migration guide"),", you can also refer to the migration guide for ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/security/jwt-credentials-deprecation-in-adobe-developer-console"},"AEM customers")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe-apiplatform/user-sync.py/blob/user-guide-wip/en/user-manual/connect_adobe.md"},"User Sync tool customers"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Integrations developed by vendors")),(0,o.mdx)("p",{parentName:"li"},"These are integrations that you may have acquired from a vendor that integrate with Adobe APIs or services. Only those integrations that use the Service Account (JWT) credentials are impacted. "),(0,o.mdx)("p",{parentName:"li"},"For assistance on how to migrate these integrations, you must contact the vendor to get software updates supporting the OAuth Server-to-Server credentials.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Custom integrations or applications")),(0,o.mdx)("p",{parentName:"li"},"These are integrations or application custom developed by an IT/development team in your organization. You are responsible for migrating these integrations. See our general-purpose ",(0,o.mdx)("a",{parentName:"p",href:"./migration.md"},"migration guide"),"."))),(0,o.mdx)("h3",{id:"how-can-i-identify-all-of-my-impacted-integrations-or-applications"},"How can I identify all of my impacted integrations or applications?"),(0,o.mdx)("p",null,"Any integration or custom application that is impacted will have a corresponding Project on the Developer Console containing the Service Account (JWT) credential used in the integration."),(0,o.mdx)("p",null,"To view all the Projects with a Service Account (JWT) credential, "),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Go to the ",(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/console"},"Adobe Developer Console")," and navigate to the Projects tab. "),(0,o.mdx)("li",{parentName:"ol"},"Apply the filter 'Attention Required' > 'Has Service Account (JWT) credential' on the list of Projects screen."),(0,o.mdx)("li",{parentName:"ol"},"Note: Any Projects that are marked 'auto-generated' are not impacted. ")),(0,o.mdx)("p",null,"A good rule of thumb is, if your company has received an email on Service Account (JWT) deprecation, you are impacted."),(0,o.mdx)("h3",{id:"how-can-i-identify-the-developeradmin-in-my-organization-who-set-up-the-project-or-the-service-account-jwt-credential"},"How can I identify the developer/admin in my organization who set up the Project or the Service Account (JWT) credential?"),(0,o.mdx)("p",null,"A good starting point to identify the developers/admins who worked on a Project is by looking at who created or last modified the Project on the Project overview screen."),(0,o.mdx)("p",null,"In addition, because the Project Activity Logs are retained for up to a year, they show a more granular view of who made what changes to a Project. Note: Information about the Project's creator may be missing for historical Projects."),(0,o.mdx)("h3",{id:"how-can-i-verify-if-the-project-on-the-developer-console-is-being-used"},"How can I verify if the Project on the Developer Console is being used?"),(0,o.mdx)("p",null,"There are a few ways to see if a Project is actively being used: "),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Open an impacted Project and view the 'Last service activity' date on the overview page. You can also see this information on the list of Projects page. "),(0,o.mdx)("li",{parentName:"ol"},"Visit the Service Account (JWT) credential overview page and look at the last access token generated at timestamp. This will tell you when this Project was last used to generate an access token. "),(0,o.mdx)("li",{parentName:"ol"},"Visit the Insights tab in a Project to see recent activity (API calls, Events Delivered, etc.) involving the credentials contained in the Project. See our documentation on ",(0,o.mdx)("a",{parentName:"li",href:"../../insights.md"},"Insights")," to know more. ")),(0,o.mdx)("h3",{id:"how-can-i-find-out-which-applications-are-using-which-projects"},"How can I find out which applications are using which projects?"),(0,o.mdx)("p",null,"Unfortunately, Adobe cannot tell which custom integration or application uses a given project. This information is solely available to the customer. Each project was created by a developer/admin within the customer's organization. The same developer/admin is best positioned to identify which application uses the given project."),(0,o.mdx)("h3",{id:"how-can-i-check-which-apis-are-being-used-in-my-project"},"How can I check which APIs are being used in my Project?"),(0,o.mdx)("p",null,"You can view this information by opening your Project on the Developer Console. All the APIs added to the Project visible on the overview screen, are being used in the Project. "),(0,o.mdx)("h2",{id:"migrating-vendor-applications"},"Migrating vendor applications"),(0,o.mdx)("h3",{id:"we-are-using-the-service-account-jwt-credential-in-a-3rd-party-integration-we-did-not-develop-how-should-we-migrate-those-integrations"},"We are using the Service Account (JWT) credential in a 3rd party integration we did not develop. How should we migrate those integrations?"),(0,o.mdx)("p",null,"The company or organization that developed the integration must add support to use the new OAuth Server-to-Server credential. Please reach out to them for updates and assistance. You can also ask the Adobe community a question on our ",(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/developer-console-forums"},"developer forums")," to see if anyone else has already migrated the same application."),(0,o.mdx)("h3",{id:"we-are-a-company-or-organization-that-develops-applications-using-service-account-jwt-credentials-that-adobe-customers-install-what-do-we-need-to-do"},"We are a company or organization that develops applications using Service Account (JWT) credentials that Adobe customers install. What do we need to do?"),(0,o.mdx)("p",null,"Until June 3, 2024, customers can still create Service Account (JWT) credentials to use your application. However, any existing or new customers of your application must switch to using the new OAuth Server-to-Server credentials before June 30, 2025."),(0,o.mdx)("p",null,"Therefore, we recommend enhancing your application before June3, 2024. You must add support to use the new credential and support for customers to migrate from the old credential to the new credential."),(0,o.mdx)("h2",{id:"migrating-auto-generated-projects"},"Migrating Auto-generated projects"),(0,o.mdx)("h3",{id:"do-we-need-to-migrate-auto-generated-projects"},"Do we need to migrate auto-generated projects?"),(0,o.mdx)("p",null,"No. Adobe will migrate all auto-generated projects without needing your action. "),(0,o.mdx)("h3",{id:"when-will-adobe-migrate-auto-generated-projects"},"When will Adobe migrate auto-generated projects?"),(0,o.mdx)("p",null,"Adobe will migrate all auto-generated projects before Jun 30, 2025."),(0,o.mdx)("h2",{id:"adobe-assistance"},"Adobe assistance"),(0,o.mdx)("h3",{id:"can-adobe-migrate-applications-for-us"},"Can Adobe migrate applications for us?"),(0,o.mdx)("p",null,"Adobe has no information on or access to your integrations or custom applications. Therefore, we cannot migrate the applications on your behalf. Instead, you must carry out the activity to identify and migrate your applications."),(0,o.mdx)("h3",{id:"can-adobe-help-me-identify-the-application-that-uses-a-given-project"},"Can Adobe help me identify the application that uses a given Project?"),(0,o.mdx)("p",null,"Unfortunately, Adobe cannot tell which custom integration or application uses a given Project. This information is solely available to the customer. Each Project was created by a developer/admin within the customer's organization. The same developer/admin is best positioned to identify which application uses the given Project. "),(0,o.mdx)("p",null,"To identify impacted Projects and their owners, see ",(0,o.mdx)("a",{parentName:"p",href:"#migration-next-steps"},"Migration Next Steps")," in this document. "),(0,o.mdx)("h3",{id:"who-can-i-contact-if-i-still-need-help"},"Who can I contact if I still need help?"),(0,o.mdx)("p",null,"Reach out to your Adobe representative, customer support, or ask a question on our ",(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/developer-console-forums"},"developer forums"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-server-to-server-authentication-faqs-md-aaf6b37a80c12baed3df.js.map