#!/usr/bin/env sh

set -e

npm i pnpm -g

pnpm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:baojie223/baojie223.github.io.git master

cd -