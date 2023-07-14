FROM node:18-bullseye as files
WORKDIR /deploy
RUN git clone https://github.com/AelElliotBanyard/digital-escape-game .
RUN npm ci
RUN npm run build

FROM node:18-bullseye
WORKDIR /deploy
COPY --from=files /deploy .
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]
