#!/bin/bash -e

pip install pyjwt

jwt="$(python /usr/src/app/jwt.py)"

access_token=""
# TODO: https://docs.github.com/en/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-an-installation

echo "token=$access_token" >> $GITHUB_OUTPUT

