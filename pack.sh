#!/bin/bash
rm -rf dist/*
#npm install --registry=https://registry.npm.taobao.org
#rm -rf node_modules
yarn install --registry=https://registry.npm.taobao.org
npm run build

if [[ $? != 0 ]]; then
  echo 'npm build fail .'
  exit 2
fi