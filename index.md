# bkRoad

bkRoad is a fast book delivery service. Our only aim is to get books to people. We are passionate about learning.

[Deployment on Amazon Lightsail](https://container-service-1.tp441iqt2m81k.us-east-1.cs.amazonlightsail.com/shelf)

## Solution

Our product, bkRoad, will solve for this by providing a quick and easy to use delivery service via the use of a web application that will allow library users to order their books from the library and then return it after they finish reading it. It can be shipped via the mail and then returned through the mail as well. While there are book delivery services, there are none which are non-profits and ship library books in an efficient manner.

We will be deploying with AWS Lightsail containers that have a Node.js application to interact with our customers. This will use an SQL database underneath a proxy like Knex and store all of the customer interactions. This will make sure that our solution is scalable, and can handle any loads. With the power of AWS Lightsail containers, we will be able to make the solution can handle any situation.

We will also be integrating the APIs of all library systems and run a program so a library can add themselves to our service. Their incentive to add their library will be that there will be an uptick in library registrations.

We will also implement an authentication system to make sure that users are able to check out books securely.

Overall we hope to provide a scalable and flexible service that can used by a variety of people all over.

## Infrastructure

### Design Principles

We decided to build this project with two main principles in mind; security and scalability. We wanted to make sure that we could create a service that can transition to any size user base, while remaining secure for all of our users

### Frontend

We decided to use Nextjs deployed AWS Lightsail. We found that it would be really easy to package our product into a docker container that we could then deploy on AWS Lightsail so that it would be instantly scalable and easy to deploy. We found our experience with AWS Lightsail to be very easy and quite enjoyable. As soon as we packaged our product we were able to instantly deploy it.

### API

We decided to use API Gateway with lambda functions to create a serverless API. Because it is serverless, it is inherently scalable and can meet any user demand. We also keep the API Gateway in a private subnet connected to the public subnet that contains the Lightsail instances to prevent the API from being accessible by the public. This goes a long way for security, because you can not get your hands on something which you have no access to.

### Database

We decided to use dynamodb, because it is a scalable database which again means that we can expand to quite a large number of queries a second if needed. We also only allow access to the dynamodb from the lambda functions that make up the API. Therefore, it is protected by the private subnet, and the lambda validation code.

<!-- bkRoad aims to  -->

<!-- bkRoad is a nonprofit organization founded to help deliver physical books to those in need. A large percent of the US population doesn't have access to physical books - by using bkRoad, those in need will get free and efficient access to books through a slick and easy to use web application.

AWS judges will vote on the submitted projects based on the following criteria:

    Adherence to the AWS Well Architected Framework
    Innovative use of Lightsail resources, and primarily, containers
    Relevancy to themes

    Blog post with overview of solution and architecture

To build your project you will receive credits for the usage of AWS products. The deadline for the submission will be on March 13, 2022.

The Internet provides a massive opportunity to democratize education and provide access to knowledge for everyone around the globe. Be it a kid’s stories app or an app which helps learn coding, bring your ideas to build these apps that make learning easy and fun! -->
