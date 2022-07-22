FROM node

#Create app directory
WORKDIR '/frontend'

COPY 'package*.json' '/frontend/'

RUN npm install

RUN ls -all

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start"]
