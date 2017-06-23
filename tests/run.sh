#!/bin/bash

./node_modules/.bin/eslint tests/fail.js

if [ $? -eq 1 ]
then
  echo "Trying fail.js - OK"
else
  exit 1
fi

./node_modules/.bin/eslint tests/pass.js

if [ $? -eq 0 ]
then
  echo "Trying pass.js - OK"
else
  exit 1
fi
