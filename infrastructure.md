# Design Principles

We decided to build this project with two main principles in mind; security and scalability. We wanted to make sure that we could create a service that can transition to any size user base, while remaining secure for all of our users

# Frontend

We decided to use Nextjs deployed AWS Lightsail. We found that it would be really easy to package our product into a docker container that we could then deploy on AWS Lightsail so that it would be instantly scalable and easy to deploy. We found our experience with AWS Lightsail to be very easy and quite enjoyable. As soon as we packaged our product we were able to instantly deploy it.

# API

We decided to use API Gateway with lambda functions to create a serverless API. Because it is serverless, it is inherently scalable and can meet any user demand. We also keep the API Gateway in a private subnet connected to the public subnet that contains the Lightsail instances to prevent the API from being accessible by the public. This goes a long way for security, because you can not get your hands on something which you have no access to.

# Database

We decided to use dynamodb, because it is a scalable database which again means that we can expand to quite a large number of queries a second if needed. We also only allow access to the dynamodb from the lambda functions that make up the API. Therefore, it is protected by the private subnet, and the lambda validation code.
