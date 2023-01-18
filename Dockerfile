FROM node:16-alpine

WORKDIR /usr/local/apps/myapp

COPY package.json ./

RUN npm install && npm cache clean

ENV PATH=/usr/local/myapp/node_modules/.bin:$PATH

WORKDIR /usr/local/apps/myapp/dev

COPY src ./src
COPY tsconfig.json ./
COPY serverless.yml ./
COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]