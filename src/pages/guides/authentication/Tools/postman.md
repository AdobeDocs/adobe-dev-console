# Postman

## OAuth Access Token

### Steps

1. Install [Postman](https://www.getpostman.com/downloads/)

2. Open Postman

3. Create a `new request`.

![pm-1](../Images/PM_1.png)

4. Click on `Authorization` and select `OAuth 2.0` from Type dropdown menu.

![pm-2](../Images/PM_2.png)

5. Click on `Get New Access Token`.

![pm-3](../Images/PM_3.png)

6. Copy your `API Key (Client ID)`, `Client Secret` and the `Default Redirect URI` from your Adobe Developer Console integration and paste it in the Postman `GET NEW ACCESS TOKEN` window. Assuming you are trying to get an access token for Adobe Analytics use below for scope: 
```
openid,AdobeID,read_organizations,additional_info.projectedProductContext,additional_info.job_function
```

*Note: If you are not sure about scope, refer to [Scope Reference](../OAuth/Scopes.md).*

![pm-4](../Images/PM_4.png)

7. You will be prompted for login by Adobe. Login using your Adobe ID.

![pm-5](../Images/PM_5.png)

8. Your access token will be generated.

![pm-6](../Images/PM_6.png)

## JWT Access Token
### Steps
1. Go to [Adobe Developer Console](https://developer.adobe.com/console)

2. Open the Service Account Integration for which you want to generate an access token.

![pmj-1](../Images/PM_JWT_1.png)

3. Click on the JWT tab, paste the entire private key file content including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` and click on `Generate JWT`.

![pmj-2](../Images/PM_JWT_2.png)

4. Copy the `Sample CURL command` and open Postman. (*Mac and Linux user can also paste the CURL command in terminal and get the access token.*)

![pmj-3](../Images/PM_JWT_3.png)

5. Click on `Import` -> `Paste Raw Text` and paste the CURL command.
 
![pmj-4](../Images/PM_JWT_4.png)

6. Click on `Send`. You will receive an access token.

![pmj-5](../Images/PM_JWT_5.png)

## CURL Requests in Windows

In API Documentation, sample CURL requests are common and helpful for the developers. Mac and Linux terminals are capable of executing such CURL requests but the Windows command prompt doesn't support it out of the box.

For windows users, you can follow below steps to execute the CURL requests easily by using Postman.

### Steps

1. Copy the CURL Request.
e.g.
```
curl https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US%26search_parameters%5Bwords%5D=kittens 
  -H 'x-api-key:myAPIKey' 
  -H 'x-product:myTestApp1.0'
 ```
 
 2. Open Postman. Click `Import` -> `Paste Raw Text` -> Paste the CURL request.
 
 ![pmw-1](../Images/PMW_1.png)
 
 3. Go to `Headers` tab and replace `myAPIKey` with your actual API Key from Adobe Developer Console integration for Adobe Stock.
 
 ![pmw-2](../Images/PMW_2.png)
 
 4. Click Send. You will receive a response.
 
 ![pmw-3](../Images/PMW_3.png)
 
 *Note: You can import any CURL Request into Postman by following the above steps.*