FROM node:18-alpine

COPY entrypoint.sh /entrypoint.sh

RUN npm install -g octokit

ENTRYPOINT ["/entrypoint.sh"]
