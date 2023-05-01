# API key Authentication

If your application needs to integrate with an Adobe offering that supports unauthenticated workflows (does not require access tokens), you can do so by using the API key credential. The API key credential identifies your application to Adobe servers and can help accept/reject requests originating from certain domains that you configure during credential setup.

## Understanding different uses of the API key credential

### Embedding Adobe web experiences on your website

Some APIs allow you to generate API Key credentials to embed an Adobe web experience on your website. For example: Adobe Express Embed SDK and PDF Embed API. These APIs only need to identify your application using your application's api key. 

To ensure that your API key is not misused, Adobe servers reject API calls that do not originate from the your website's domains. You can configure your website's domains for your API key credential  during credential setup.

### Calling APIs that do not require an access token

A small collection of Adobe services (e.g. API Mesh for App Builder, Adobe Stock) do not require an access token for API request. These services can be called _“anonymously”_ and typically provide consistent results regardless of the application or user that made the request. Such APIs can be called with an API Key credential. 

To try it out, you can create a project with the Adobe Stock API. Then use the API key to make an API request as shown in the cURL command below. 

```curl
curl 'https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US%26search_parameters%5Bwords%5D=kittens '
  -H 'x-product:testapp'
  -H 'x-api-key:YOUR-API-KEY-HERE'
```

## API Key credential

The API Key credential, as the name suggests, only contains an API key and no secrets. It cannot be used to generate access tokens. An API key credential only allows Adobe servers to identify the application but cannot authenticate a user or the application.

### Understanding Allowed Origins

Some Adobe APIs do not require an access token, only an API key, to be called. However, such an API may still need to prevent your API key from being copied by a malicious actor and then misused. 

To prevent such bad actors Adobe servers only accept API requests originating from your website, and reject any other API requests. This is achieved by relying on the Origin HTTP request header that a broswer sends with each request. 

To ensure that Adobe servers accept API requests from all the domains your application uses, you must add those domains as 'allow listed origins' during API Key credential setup.

You can configure upto 5 comma separated domains, use wildcards to club together multiple subdomains, and specify an non-priviledged port numbers. You can edit these domains any time by visting your project on the Adobe Developer Console.

