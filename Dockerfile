FROM node:12.20.0-alpine3.12 AS builder
WORKDIR /app
COPY . .
RUN ls
RUN ${port}
RUN npm install react-scripts -g --silent
RUN yarn install
RUN yarn run build

FROM node:12.20.0-alpine3.12
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
RUN ls
RUN ${port}
CMD ["serve", "-s", "."]
