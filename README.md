# kin-nxpm-stack

This project was generated using [@nxpm/stack](https://github.com/nxpm/stack) which is based on [Nx](https://nx.dev).

<p align="center"><img src="https://avatars.githubusercontent.com/u/54114845?v=4" width="450"></p>

# Setup

After download this project, you first need to run the setup.

Make sure to have Docker running, it will use `docker-compose` to start the database server.

```shell
yarn setup
```

# Development server

Start Api

```shell
yarn dev:api
```

Start Web

```shell
yarn dev:web
```

# Generate GraphQL SDK

The queries for the GraphQL SDK are stored in `libs/shared/util/sdk/src/graphql`.

After updating the queries you can re-generate the SDK:

```shell
yarn build:sdk
```

Or run it in watch mode

```shell
yarn dev:sdk
```

# Building the project

You can build both apps into a production build:

```shell
yarn build
```

After that, you can run the production app:

```shell
yarn start
```

Build Api

```shell
yarn build:api
```

Build Web

```shell
yarn build:web
```

# Components

```markdown
Api: api
Web: web
```
