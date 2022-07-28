# Guide to run locally

The project is a Docker network, which has to be built up with docker-compose and after that you can run the project locally.Buy you can also run the containers seperately.

###### Programs needed for running the project
First of all you will need all neccesarry tools dowloaded like **code editor**, **docker**, **docker-compose**.

###### Adding environment variables
Before to run the project locally you need to configure environment variables in the docker-compose.yml file.There are three variables ***SESSION_SECRET***,***PORT***,***MONGODB_URL***.SESSION_SECRET variable can be of any value and PORT variable should have the value of 3001.Note that if you are not using docker and run them seperately, you will need to add .env file in /backend and add variables there.

###### Populating your database
***MONGODB_URL*** variable is for the mongodb database address.If you are using your own database, your database should have collections named 'users' and 'results', where 'users' should have a document with 'email' and 'password' properties, where password should be hashed by module 'bcrypt'.If you want to use the current email and password then they are user@email.com as email and as password Also the 'results' collection should have a document with 'email' property to find the user and 'result' property for exam score.  You can also make manual changes from /controllers/signIn controller if you can't provide hashed password or just skip all database parts if both variants are unavailable.

###### Hostname
You will need your own hostname to host the application and export it along with other locl variables like this.

> export DOCKER_HOST=...your hostname...

###### Certificates
You will need to give direction to your certificate and private key, which should be located in /ingress folder, in /ingress/dDockerfile file like this

> COPY ...path to your certificate... /ssl/chain.pem

> COPY ...path to your private key... /ssl/privkey.pem


###### Building the docker application
And after that run these commands

> docker-compose build

> docker-compose up

# Live demo
.
You can visit the site by following link https://arman.testz.xyz/mainPage. The email and the password are ***user@email.com*** and ***password1***.
 
