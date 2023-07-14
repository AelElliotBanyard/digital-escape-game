FROM node:18-bullseye
WORKDIR /app
RUN npm ci
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start" ]
