FROM node:18-alpine3.17 AS builder
WORKDIR /usr/src/app
COPY ./** ./
RUN yarn
RUN yarn build:prod

FROM node:18-alpine3.17 AS prod
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/.next ./.next
COPY ./package.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
CMD [ "yarn", "start" ]