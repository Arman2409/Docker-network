FROM nginx

WORKDIR /ingress

EXPOSE 90

COPY default.conf /etc/nginx/nginx.conf

RUN mkdir /ssl

COPY "....path to your certificate..." /ssl/chain.pem

COPY "...path to your private key..." /ssl/privkey.pem
