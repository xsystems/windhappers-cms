#!/bin/sh

rm -r /usr/local/apache2/htdocs

ln -s /windhappers-cms-gui/build /usr/local/apache2/htdocs

npm run build

cp favicon.ico /windhappers-cms-gui/build

exec httpd-foreground
