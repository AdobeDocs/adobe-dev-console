# Steps

1. create the certificate and private key using openssl

```$ openssl req -nodes -text -x509 -newkey rsa:2048 -keyout secret.pem -out certificate.pem -days 356```

2. Upload the certificate.pem in Adobe IO Console-> Your Integration-> Public keys

3. Edit the config.yaml and add the values from your Adobe Developer Console integration and the secret.pem path



