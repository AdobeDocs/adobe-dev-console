# API key Authentication

If your application needs to integrate with an Adobe offering that supports unauthenticated workflows (does not require access tokens), you can do so by using the API key credential. The API key credential identifies your application to Adobe servers and can help accept/reject requests originating from certain domains that you configure during credential setup.

## Understanding different uses of the API key credential

### Embedding Adobe web experiences on your website

Some APIs allow you to generate API Key credentials to embed an Adobe web experience on your website. For example, Adobe Express Embed SDK and PDF Embed API are two such APIs. These APIs only need to identify your application using your application's API key.

To ensure that your API key is not misused, Adobe servers reject API calls that do not originate from your website's domains. During credential setup, you can configure your website's domains for your API key credential.

### Calling APIs that do not require an access token

A small collection of Adobe services (e.g., API Mesh for App Builder, Adobe Stock) do not require an access token for API requests. These services can be called *"anonymously"* and typically provide consistent results regardless of the application or user that made the request. Such APIs can be called with an API Key credential.

You can create a project with the Adobe Stock API to try it out. Then use the API key to make an API request, as shown in the cURL command below.

```curl
curl 'https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US%26search_parameters%5Bwords%5D=kittens '
  -H 'x-product:testapp'
  -H 'x-api-key:YOUR-API-KEY-HERE'
```

## API Key credential

As the name suggests, the API Key credential only contains an API key and no secrets. It cannot be used to generate access tokens. An API key credential only allows Adobe servers to identify the application but cannot authenticate a user or the application.

### Understanding Allowed Origins

Some Adobe APIs do not require an access token, only an API key, to be called. However, such an API may still need to prevent your API key from being copied by a malicious actor and misused.

To prevent bad actors from using your API key, Adobe servers only accept API requests originating from your website and reject any other API requests. Adobe servers determine whether the request originates from your website by relying on the Origin HTTP request header that a browser sends with each request.

To ensure that Adobe servers accept API requests from all the domains your application uses, you must add those domains as 'allow listed origins' during API Key credential setup.

You can configure up to 5 comma-separated domains, use wildcards to club together multiple subdomains and specify any non-privileged port numbers. You can edit these domains any time by visiting your project on the Adobe Developer Console.