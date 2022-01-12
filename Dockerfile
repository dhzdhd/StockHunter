FROM node

COPY . /usr/app
WORKDIR /usr/app

EXPOSE 3000

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm install

ENTRYPOINT [ "npm" ]
RUN ["run", "dev"]