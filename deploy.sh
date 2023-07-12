#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "New Deploy"
git push -f git@github.com:ara-pamungkas/ara-pamungkas.github.io.gitgi

CD -