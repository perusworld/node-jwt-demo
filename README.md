#NodeJS Express JWT Demo

##install dependencies:
> cd . && npm install

##key pair gen
> openssl genrsa -out priv-key.pem 2048
> openssl rsa -in priv-key.pem -outform PEM -pubout -out pub-key.pem

##run the app:
> SET DEBUG=node-jwt-demo:* & npm start

##testing - powershell
> $token = node test.js; Invoke-WebRequest -Headers @{"Authorization" = "Bearer $token"} -Method POST -Body "{'workspaces':{'title':'CMC Regulatory Support','creator_role':'maven'}}" http://localhost:3000/protected/one
