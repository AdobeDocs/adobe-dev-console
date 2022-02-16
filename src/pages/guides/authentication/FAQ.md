# Frequently Asked Questions

### Where can I find the sample code for OAuth authentication?
Code Samples are available for the following languages - 
1. [NodeJS](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-auth-node)
2. [Python](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-auth-python)

### Where can I find the sample code for Service Account (JWT) authentication?
Code Samples are available for the following languages - 
1. [Java](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-jwt-java)
2. [DotNet](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-jwt-dotnet)
3. [Python](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-jwt-python)
4. [NodeJS](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-jwt-node)
5. [PHP](https://github.com/AdobeDocs/adobe-dev-console/tree/main/samples/adobe-jwt-php)
   
### How to use the private key for generating a JWT?
Please copy the full content of private key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` to generate a correct JWT token.

### What do Default Redirect URI and the Redirect URI Pattern mean?
The default redirect URI is the URL where Adobe Identity Management Service (IMS) will send the authorization code after a successful login with Adobe. You will need that code to make a call to the token endpoint to receive an access token.

The redirect URI pattern is a regex representation of allowed URLs to receive the authorization code. It is used when you pass an optional parameter `redirect_url` with your request.
