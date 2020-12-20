FROM node:12.2.0
WORKDIR /app
COPY . .
RUN ls
RUN ${port}
RUN npm install react-scripts -g --silent
RUN yarn install
RUN yarn run build

FROM node:12.2.0
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD serve -p $PORT -s .
