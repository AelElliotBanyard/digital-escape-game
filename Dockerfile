FROM node:18-bullseye
WORKDIR /deploy
RUN npm ci
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start" ]
