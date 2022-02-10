# Build environment
FROM node:16 AS BUILD_IMAGE

WORKDIR /usr/src/app

# copy all files
COPY . .

# install dependencies
RUN yarn

# build application
RUN yarn build

# Production environment
FROM node:16

RUN npm install pm2 -g

WORKDIR /usr/src/app

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/dist ./dist
COPY --from=BUILD_IMAGE /usr/src/app/package.json .
COPY --from=BUILD_IMAGE /usr/src/app/yarn.lock .
COPY --from=BUILD_IMAGE /usr/src/app/ormconfig.js .

RUN yarn install --prod

EXPOSE 5000

CMD [ "pm2-runtime", "dist/main.js"]
