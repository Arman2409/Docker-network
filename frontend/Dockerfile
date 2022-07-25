FROM node:16.16 as front

WORKDIR '/frontend'

COPY 'package*.json' '/frontend/'

RUN ls -all

RUN npm install --silent

RUN npm install react-scripts@3.0.1 -g --silent 

COPY . .

RUN npm run build

FROM nginx:1.17.10

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=front /frontend/build /usr/share/nginx/html

EXPOSE 3000