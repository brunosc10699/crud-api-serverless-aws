# Serverless  API

First of all, I would like to thank [Cassiano Peres](https://linkedin.com/in/peres-cassiano), technical lead at DIO ([Digital Innovation One](https://lnkd.in/e2f-aeNX)), for his classes on "[Infraestrutura como código na AWS com The Serverless Framework](https://lnkd.in/e2f-aeNX)". It has contributed a lot to my growth in software development.

*If anyone else would like to take free lessons from him and other IT experts at DIO, hit this link: https://lnkd.in/e2f-aeNX*

This repository contains a simple "serverless" application to store data about my course certificates on the [DIO platform](https://lnkd.in/e2f-aeNX). It was built using JavaScript to create functions that run on Amazon Lambda. It is automatically scaled so that Amazon only charges when the functions are performed. That reduces the total cost of running and operating applications allowing us to build more and manage less.

There are five JavaScript functions in this project in total. One that allows us to save the course name, workload, completion date and credential of the certificate which is used as key schema, and others to retrieve all certificates, update, delete and retrieve by id.

![img1.jpg](https://raw.githubusercontent.com/brunosc10699/crud-api-serverless-aws/main/.github/images/img1.jpg)

##### Language: JavaScript (Node.js API)

##### Project dependencies

```
@aws-sdk/client-dynamodb 
@aws-sdk/util-dynamodb 
serverless-iam-roles-per-function
```

##### Endpoints

```
  POST - https://v0cybf73bi.execute-api.us-east-1.amazonaws.com/dev/certificate
  GET - https://v0cybf73bi.execute-api.us-east-1.amazonaws.com/dev/certificates
  GET - https://v0cybf73bi.execute-api.us-east-1.amazonaws.com/dev/certificate/{id}
  PUT - https://v0cybf73bi.execute-api.us-east-1.amazonaws.com/dev/certificate/{id}
  DELETE - https://v0cybf73bi.execute-api.us-east-1.amazonaws.com/dev/certificate/{id}
```

All endpoints are Amazon Cognito login and password protected. To access the app you need to be logged in. Registration is not available. Only the app administrator can register a new user. If you have permission, go to the login page by clicking [here](https://certificate.auth.us-east-1.amazoncognito.com/login?client_id=55q7fjplb5o9tnkqe4aqa4ci0o&response_type=code&scope=email+openid+aws.cognito.signin.user.admin+profile&redirect_uri=https://example.com/callback).

##### GitHub Actions

​	To automate deployment, I explored the continuous delivery with GitHub Actions. To see more, hit https://docs.microsoft.com/en-us/azure/developer/github/github-actions
