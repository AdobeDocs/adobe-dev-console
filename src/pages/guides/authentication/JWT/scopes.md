# JWT Metascopes


<InlineAlert slots="text"/>

The Service Account (JWT) credentials have been deprecated in favor of the OAuth Server-to-Server credentials. Your applications using the Service Account (JWT) credentials will stop working after Jan 27, 2025. You must migrate to the new credential by **Jan 27, 2025**, to ensure your application continues functioning. [Learn more](../ServerToServerAuthentication/migration.md).

JSON Web Token (JWT) metascopes govern the access and privileges for service accounts. As an application developer, you will choose the set of scopes to access certain resources by specifying the scopes as part of the encoding claims for your JWTs.

## Adobe I/O

Metascopes for Adobe I/O Service Account APIs

| APIs           | Metascopes                                            |
| -------------- | ----------------------------------------------------- |
| I/O Events     | `https://ims-na1.adobelogin.com/s/event_receiver_api` |
| I/O Management | `https://ims-na1.adobelogin.com/s/ent_adobeio_sdk`    |

## Creative Cloud

Metacopes for Creative Cloud Service Account APIs

| APIs                       | Metascopes                                             |
| -------------------------- | ------------------------------------------------------ |
| Adobe Stock                | `https://ims-na1.adobelogin.com/s/ent_stocksearch_sdk` |
| Dimension (default)        | `https://ims-na1.adobelogin.com/s/ent_default_sdk`     |
| Dimension (CCE-AS version) | `https://ims-na1.adobelogin.com/s/ent_ccas_sdk`        |
| Photoshop (default)        | `https://ims-na1.adobelogin.com/s/ent_default_sdk`     |
| Photoshop (CCE-AS version) | `https://ims-na1.adobelogin.com/s/ent_ccas_sdk`        |
| Lightroom (default)        | `https://ims-na1.adobelogin.com/s/ent_default_sdk`     |
| Lightroom (CCE-AS version) | `https://ims-na1.adobelogin.com/s/ent_ccas_sdk`        |

## Document Cloud

Metascopes for Document Cloud Service Account APIs

| APIs         | Metascopes                                               |
| ------------ | -------------------------------------------------------- |
| PDF Services | `https://ims-na1.adobelogin.com/s/ent_documentcloud_sdk` |

## Experience Cloud

Metascopes for Experience Cloud Service Account APIs

| APIs                                             | Metascopes                                                             |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| Adobe Analytics                                  | `https://ims-na1.adobelogin.com/s/ent_analytics_bulk_ingest_sdk`       |
| Experience Platform                              | `https://ims-na1.adobelogin.com/s/ent_dataservices_sdk`                |
| Campaign                                         | `https://ims-na1.adobelogin.com/s/ent_campaign_sdk`                    |
| Target                                           | `https://ims-na1.adobelogin.com/s/ent_marketing_sdk`                   |
| Experience Platform Launch (Admin)               | `https://ims-na1.adobelogin.com/s/ent_reactor_sdk`               |


## GDPR

Metascopes for GDPR Service Account APIs

| APIs | Metascopes                                      |
| ---- | ----------------------------------------------- |
| GDPR | `https://ims-na1.adobelogin.com/s/ent_gdpr_sdk` |

## Sensei

Metascopes for Sensei Service Account APIs

| APIs                | Metascopes                                              |
| ------------------- | ------------------------------------------------------- |
| Smart Content       | `https://ims-na1.adobelogin.com/s/ent_smartcontent_sdk` |
| Auto Crop, Auto Tag | `https://ims-na1.adobelogin.com/s/ent_sensei_image_sdk` |

## User Management

Metascopes for User management Service Account APIs

| APIs            | Metascopes                                      |
| --------------- | ----------------------------------------------- |
| User Management | `https://ims-na1.adobelogin.com/s/ent_user_sdk` |

## Other

Metascopes for miscellaneous Service Account APIs

| APIs             | Metascopes                                              |
| ---------------- | ------------------------------------------------------- |
| AEM Brand portal | `https://ims-na1.adobelogin.com/s/ent_brand_portal_sdk` |
| Places           | `https://ims-na1.adobelogin.com/s/ent_places_sdk`       |
| Cloud Manager    | `https://ims-na1.adobelogin.com/s/ent_cloudmgr_sdk`     |
