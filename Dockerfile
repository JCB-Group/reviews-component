FROM node:12.4.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3012

CMD [ "sh", "-c", "npm run seed && npm start"]