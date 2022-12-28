FROM node:18-alpine

COPY token.js /usr/app/token.js
COPY entrypoint.sh /entrypoint.sh

RUN npm install -g octokit

ENTRYPOINT ["/entrypoint.sh"]
