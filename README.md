# Guide to run locally

As you can see the project is a Docker network, which has to be built up with docker-compose and after that you can run the project locally.Buy you can also run the containers seperately.First of all you will need all neccesarry tools dowloaded like code editor, docker, docker-compose.Before to run the project locally you need to configure environment variables in the docker-compose.yml file.There are three variables SESSION_SECRET,PORT=3001,MONGODB_URL.If you are using your own database, your database should have collections named 'users' and 'results', where 'users' should have a document with 'email' and 'password' properties, where password should be hashed by module 'bcrypt'.Also the 'results' collection should have a document with 'email' property to find the user and 'result' property for exam score. You can also use my MongoDB url which is'mongodGhazaryan2409:AR122333@cluster0.jh3pp.mongodb.net/OnGrid' which you don't need to run and won't need MongoDB installed.The email and password for the project's authorization page of this database are 'user@email.com' and 'password1'. You can also make manual changes from /controllers/signIn controller if you can't provide hashed password or just skip all database parts if both variants are unavailable. SESSION_SECRET variable can be of any value and PORT variable should have the value of 3001.Note that if you are not using docker and run them seperately, you will need to add .env file in /backend and add variables there.After this all you can build the Docker network by command.After that you will also need to have the DOCKER_HOST variable set in your environment variables.So you can do it by running the following command

> export DOCKER_HOST=root@135.181.123.222

And after that run these commands

> docker-compose build

> docker-compose up

Then you can visit the site by following link https://arman.testz.xyz/mainPage
 
