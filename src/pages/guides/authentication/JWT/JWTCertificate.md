# Create a Public Key Certificate


<InlineAlert slots="text"/>

The Service Account (JWT) credentials have been deprecated in favor of the OAuth Server-to-Server credentials. Your applications using the Service Account (JWT) credentials will stop working after Jan 1, 2025. You must migrate to the new credential by **Jan 1, 2025**, to ensure your application continues functioning. [Learn more](./ServerToServerAuthentication/migration.md).

Create a private key and a public certificate. Make sure you store these securely.

## MacOS and Linux

Open a terminal and execute the following command:  

`openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt`

![Generate public certificate](../Images/auth_jwtqs_00.png "Generate Public certificate")

## Windows

1. Download an OpenSSL client to generate public certificates; for example, you can try the [OpenSSL Windows client](https://bintray.com/vszakats/generic/download_file?file_path=openssl-1.1.1-win64-mingw.zip).

2. Extract the folder and copy it to the **C:/libs/** location.

3. Open a command-line window and execute the following commands:  

    ```
    set OPENSSL_CONF=C:/libs/openssl-1.1.1-win64-mingw/openssl.cnf  
    
    cd C:/libs/openssl-1.1.1-win64-mingw/  
    
    openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt
    ```  
    ![Generate public certificate windows](../Images/auth_jwtqs_000.png "Generate Public certificate windows")

4. Once you&rsquo;ve completed the steps for your chosen platform, continue in the Adobe Developer Console.

## Using the Public Key Certificate for Service Account Integration

1. Upload the public certificate (certificate_pub.crt) as a part of creating the integration.

    ![Upload public certificate](../Images/auth_jwtqs_03.png "Upload public certificate")

2. Your integration should now be created with the appropriate public certificate and claims.

    ![Integration created](../Images/auth_jwtqs_04.png "Integration created")
