FROM node:12.22.3-alpine3.12

LABEL maintainer="xsystems"

WORKDIR /windhappers-cms-api

COPY ./package.json ./

RUN npm install

COPY favicon.ico ./
COPY public ./public
COPY extensions ./extensions
COPY config ./config
COPY components ./components
COPY api ./api

EXPOSE 1337

CMD ["npm", "run", "start"]
