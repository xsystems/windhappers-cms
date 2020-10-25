#!/bin/sh

VERSION=${VERSION:-latest}
BUILD_DIR=build-docker

rm --recursive ${BUILD_DIR}
mkdir --parents ${BUILD_DIR}

cp --recursive \
  package.json \
  favicon.ico \
  api \
  components \
  config \
  extensions \
  public \
  docker/gui/entrypoint.sh \
  docker/gui/httpd-windhappers-cms-gui.conf \
  ${BUILD_DIR}

docker build \
  --file docker/api/Dockerfile \
  --tag xsystems/windhappers-cms-api:${VERSION} \
  ${BUILD_DIR}

docker tag \
  xsystems/windhappers-cms-api:${VERSION} \
  xsystems/windhappers-cms-api:latest

docker build \
  --file docker/gui/Dockerfile \
  --tag xsystems/windhappers-cms-gui:${VERSION} \
  ${BUILD_DIR}

docker tag \
  xsystems/windhappers-cms-gui:${VERSION} \
  xsystems/windhappers-cms-gui:latest
