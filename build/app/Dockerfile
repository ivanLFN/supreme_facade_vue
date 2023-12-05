ARG DOCKER_REGISTRY_PROXY=ghcr.io
ARG NODE_VERSION=18
ARG DEBIAN_BASE=bookworm-slim
ARG BASE_BUILD_IMAGE=node:${NODE_VERSION}-${DEBIAN_BASE}
ARG BASE_IMAGE=${DOCKER_REGISTRY_PROXY}/debian:${DEBIAN_BASE}
ARG BASE_PROD_IMAGE=nginx:1.16.0-alpine
ARG USER=sf-web
FROM ${BASE_BUILD_IMAGE} as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install --silent
RUN npm install -g firebase-cli

FROM builder as build

COPY . /app
RUN --mount=type=secret,id=firebase,dst=.env npm run build && firebase deploy


FROM builder as development

# install simple http server for serving static content
RUN npm install -g http-server
RUN npm install -g @vue/cli
RUN npm install -g firebase-cli
# make the 'app' folder the current working directory

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD ["wget", "-q", "http://localhost:80/healthcheck", "-O", "-"]

EXPOSE 3000

CMD [ "npm", "run", "serve" ]

# production environment
FROM ${BASE_PROD_IMAGE} as production

WORKDIR /app
COPY --chown=101:101 --from=build /app/dist /usr/share/nginx/sf-web
# RUN rm /etc/nginx/conf.d/default.conf
COPY build/app/files/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 3000

USER ${USER}
CMD ["nginx", "-g", "daemon off;"]
