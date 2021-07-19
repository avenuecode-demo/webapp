FROM node:15.12.0

ARG CONTEXT_PATH

COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock
WORKDIR /usr/src/app
RUN ["yarn", "install"]
COPY . /usr/src/app
RUN ["yarn", "build"]
EXPOSE 3000
CMD ["yarn", "start"]


