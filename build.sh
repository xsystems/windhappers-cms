#!/bin/sh

VERSION=${VERSION:-latest}
BUILD_DIR_API=build-api
BUILD_DIR_GUI=build

rm --recursive ${BUILD_DIR_API}
mkdir --parents ${BUILD_DIR_API}

cp --recursive \
  package.json \
  favicon.ico \
  api \
  components \
  config \
  extensions \
  public \
  ${BUILD_DIR_API}

docker build \
  --file docker/api/Dockerfile \
  --tag xsystems/windhappers-cms-api:${VERSION} \
  ${BUILD_DIR_API}

docker tag \
  xsystems/windhappers-cms-api:${VERSION} \
  xsystems/windhappers-cms-api:latest

npm install

for ENVIRONMENT in prd acc dev ; do
  case ${ENVIRONMENT} in
    prd) API_SUB_DOMAIN="api" ;;
    *)   API_SUB_DOMAIN="api.${ENVIRONMENT}" ;;
  esac

  NODE_ENV=production \
  CMS_API_EXTERNAL_URL="https://${API_SUB_DOMAIN}.windhappers.nl" \
  CMS_GUI_EXTERNAL_PATH="/" \
  npm run build

  cp favicon.ico \
     docker/gui/httpd-windhappers-cms-gui.conf \
     ${BUILD_DIR_GUI}

  docker build \
    --file docker/gui/Dockerfile \
    --tag xsystems/windhappers-cms-gui:${VERSION}-${ENVIRONMENT} \
    ${BUILD_DIR_GUI}

  docker tag \
    xsystems/windhappers-cms-gui:${VERSION}-${ENVIRONMENT} \
    xsystems/windhappers-cms-gui:latest-${ENVIRONMENT}
done
