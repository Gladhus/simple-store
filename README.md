# simple-store
Simple store app with product catalog and shopping cart

## Server
The server app is made with Spring-Boot and mysql, using the liquibase framework to manage de database changes involved in the development of the app. The server uses maven to manage dependencies.
To run : 
 - Start a MySQL server on the local machine.
 - Create a schema named 'simplestore'.
 - Insert the credentials and URL to MySQL database in the file 'application-dev.properties'
 - From the server folder :
  - mvn spring-boot:run

## Client
The client app is made with AngularJS 2 using angular-cli. 
To run, from the client folder : 
 - npm install
 - ng serve
