FROM node:lts-alpine
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production=false --silent && mv node_modules ../

COPY . .
RUN npm run build

CMD ["npm", "run", "preview"]