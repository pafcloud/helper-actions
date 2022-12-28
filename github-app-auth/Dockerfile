FROM node:18-alpine

COPY entrypoint.sh /entrypoint.sh

RUN npm install octokit

ENTRYPOINT ["/entrypoint.sh"]
