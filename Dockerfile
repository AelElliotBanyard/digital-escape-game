FROM node:18-bullseye
WORKDIR /
RUN npm ci
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start" ]
