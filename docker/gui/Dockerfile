FROM httpd:2.4.46-alpine

LABEL maintainer="xsystems"

RUN apk add --no-cache nodejs npm

COPY . htdocs
RUN mv htdocs/httpd-windhappers-cms-gui.conf conf/extra/ \
 && echo "Include conf/extra/httpd-windhappers-cms-gui.conf" >> conf/httpd.conf
