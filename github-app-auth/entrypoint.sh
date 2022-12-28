#!/bin/sh -l

token="$(node /usr/app/token.js)"

echo "::add-mask::$token"

echo "token=$token" >> $GITHUB_OUTPUT
