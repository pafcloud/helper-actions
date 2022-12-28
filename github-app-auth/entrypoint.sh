#!/bin/bash -e

npm i octokit

token="$(node token.js)"

echo "::add-mask::$token"

echo "token=$token" >> $GITHUB_OUTPUT
