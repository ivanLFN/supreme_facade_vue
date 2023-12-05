# sw vue frontend

Digital Identitity client side frontend app

[![build status](https://github.com/vveliev/sf-web-vue/actions/workflows/pipeline.yml/badge.svg)](https://github.com/vveliev/sf-web-vue/actions/workflows/pipeline.yml)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)


## Developemnt setup

### Prerequisites

- docker
- docker-compose
- make
- vscode(optional)


### Project setup

1. Start project
    ```bash
    make init

    make sandbox

    npm run serve
    ```
2. Open the browser and go to http://localhost:3000/

### Helpful commands

```bash
npm install -g @vue/cli

npm install

npm run serve
### Compiles and minifies for production
npm run build

### Lints and fixes files
npm run lint

### Lints and fixes files
npm run lint:fix
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Deployments

```bash
npm install
npm run build
```
