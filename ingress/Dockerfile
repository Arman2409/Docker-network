FROM nginx

WORKDIR /ingress

EXPOSE 80

COPY default.conf /etc/nginx/nginx.conf

RUN mkdir /ssl

COPY chain.pem /ssl/chain.pem

COPY privkey.pem /ssl/privkey.pem

