#!/bin/sh

if [ -z "${VERSION}" ]; then
  echo "The VERSION environment variable is NOT set, but is required."
  exit
fi

COMMIT=${COMMIT:-`git rev-parse HEAD`}

git tag --annotate --message "Release ${VERSION}" ${VERSION} ${COMMIT}
git push origin ${VERSION}

./build.sh

docker push xsystems/windhappers-cms-api:${VERSION}
docker push xsystems/windhappers-cms-api:latest

docker push xsystems/windhappers-cms-gui:${VERSION}
docker push xsystems/windhappers-cms-gui:latest
