# Quota usage overview

When adding select APIs to your Adobe Developer Console project, it may specify a quota, or fixed allowance, for usage. 

## What is quota?

Quota specifies a fixed amount of usage, such as a total number of operations or specific actions, that your organization can take using a select API during a specific time period.

For example, the [Document Cloud Services SDK (DC SDK) provides a trial program](https://www.adobe.io/apis/documentcloud/dcsdk/docs.html?view=services) allowing you to test the functionality of the SDK through the use of free credentials. The quota provided is generous enough to get you up and running to use the DC SDK within your project.

<InlineAlert slots="text"/>

Currently it is not possible to request additional quota or upgrade existing quota.

## View quota usage

Quota usage can be viewed within Console by selecting the appropriate project and then selecting the API in the left navigation of the *Project overview*. 

If the API has a specified quota, *Quota usage* will be visible at the top of the API overview screen, showing the percentage of quota used and the total number of units used. The type of units and total number of units shown relate to the specific API and its functionality.

For example, the DC SDK (Shown as *Services SDK* in the image below) provides 5,000 pages-worth of PDF actions for a six month time period, therefore the **Total quota** is 5,000 and the **Quota used** refers to the number of PDF actions multiplied by the number of pages. The percent value refers to the percentage of the 5,000 total quota that has been used.

![](../images/quota-usage.png)

## Next steps

To learn more about individual APIs, including details related to trial programs and quotas, please be sure to read the API-specific documentation provided within Console. To easily access API documentation, select **View documentation** in the *Getting started* section of the API overview or select **View docs** while adding an API to your project.

For a complete guide to adding services, such as APIs, Events, and Runtime to your projects, begin by reading the [services overview](services/).



