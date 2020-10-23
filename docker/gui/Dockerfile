FROM httpd:2.4.46-alpine

LABEL maintainer="xsystems"

WORKDIR /windhappers-cms-gui

RUN apk add --no-cache nodejs npm

COPY ./package.json ./

RUN npm install

COPY favicon.ico ./
COPY entrypoint.sh ./
COPY public ./public
COPY extensions ./extensions
COPY config ./config
COPY components ./components
COPY api ./api

CMD [ "./entrypoint.sh" ]
