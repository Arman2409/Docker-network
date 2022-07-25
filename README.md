# Guide to run locally

As you can see the project is a Docker network, which has to be built up with docker-compose and after that you can run the project locally.Buy you can also run the containers seperately.But before to run the project locally you need to change environment variables in the docker-compose.yml file.
There are three variables SESSION_SECRET,PORT=3001,MONGODB_URL.If you are using your own database, your database should have collections named 'users' and 'results', where 'users' should have a document with 'email' and 'password' properties, where password should be hashed by module 'bcrypt'.Also the 'results' collection should have a document with 'email' property to find the user and 'result' property for exam score. You can also use my MongoDB url which is'mongodGhazaryan2409:AR122333@cluster0.jh3pp.mongodb.net/OnGrid' which you don't need to run and won't need MongoDB installed.The email and password for the project's authorization page of this database are 'user@email.com' and 'password1'. You can also make manual changes from /controllers/signIn controller if you can't provide hashed password or just skip all database parts if both variants are unavailable. SESSION_SECRET variable can be of any value and PORT variable should have the value of 3001.Note that if you are not using docker and run them seperately, you will need to add .env file in /backend and add variables there.
For /frontend directory if you are running the project with Docker you have to change the proxy property in package.json file to "htttp://localhost:3001" or if you are running the project without Docker then you will need to change the proxy property to your local Docker's ip, which you can get by command 

> ip -4 addr show docker0 | grep -Po 'inet \K[\d.]+'

in Linux operation system.After this all you can build the Docker network by command

> docker-compose up --build
 
and then visit the server http://localhost:3000 and watch the project running.