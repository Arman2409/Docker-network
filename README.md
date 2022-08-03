# Guide to run locally

The project is a Docker network, which has to be built up with docker-compose and after that you can run the project locally.Buy you can also run the containers seperately.

###### Programs needed for running the project
First of all you will need all neccesarry tools dowloaded like **code editor**, **docker**, **docker-compose**.

###### Adding environment variables
Before running the project locally you need to configure environment variables in the docker-compose.yml file.There you can see the environment variables in environment sections.There you can see that ***PORT*** is already of value 3001, you will need to give any value to ***SESSION_SECRET*** variable and also add your username, password and database name for database configuration.Tese last three variables have to be the same for both the backend and database containers.

###### Database configuration for connecting ######
To connect to database you should create your own user and database. For that you can add a username, password and database in docker-compose.yml file where you see places marked for that both for database and server.Also you will need to configure the database's url to connect to the database.

###### Populating your database with initial values
To have initial values in your database you have to add them in /backend/initial.js file from where server inserts initial values to database.In order to have initial user you should add document with 'email' and 'password' properties using the UserModel, where password should be hashed by module 'bcrypt'.You can use use the current email and password then they are user@email.com as email and as password $2b$10$iKvuotyrjX4oZXel7eDjYu8CPR6qS.5o0qXMrkTFFY7k3G4gKpK1e for password1.Also the 'results' collection should have a document with 'email' property to find the user and 'result' property for exam score, which is inserted by ResultModel.  You can also make manual changes from /controllers/signIn controller if you can't provide hashed password or just skip all database parts if both variants are unavailable.

###### Hostname
You will need your own hostname to host the application and export it along with other locl variables like this.

> export DOCKER_HOST=...your hostname...

###### Certificates
You will need to give direction to your certificate and private key, which should be located in /ingress folder, in /ingress/dDockerfile file like this

> COPY ...path to your certificate... /ssl/chain.pem

> COPY ...path to your private key... /ssl/privkey.pem


###### Building the docker application
After all configurations you can run these commands and host your application

> docker-compose build

> docker-compose up

# Live demo
.
You can visit the site by following link https://arman.testz.xyz/. The email and the password are ***user@email.com*** and ***password1***.
 
