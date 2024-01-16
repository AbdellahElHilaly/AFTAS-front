FROM node:20.11.0

WORKDIR /app

COPY dist/aftas-front/* .

EXPOSE 4200

RUN npm install -g http-server

CMD ["http-server", "-p", "4200"] 