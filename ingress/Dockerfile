FROM nginx

WORKDIR /ingress

EXPOSE 90

COPY default.conf /etc/nginx/nginx.conf

RUN mkdir /ssl

COPY ...path to your certificate inside the ingress container... /ssl/chain.pem

COPY ...path to your private key inside the ingress container... /ssl/privkey.pem
