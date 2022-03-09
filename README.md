# Parkpal

Parkpal is a smart parking multi-device application that allow users to rent out their parking
spaces to other drivers.

## Techstack

### Server

- Typescript
- Nestjs
- Graphql
- Typeorm

### Web

- Typescript
- Nextjs
- Material UI
- Styled Components
- Redux Toolkit
- Apollo Client
- Leaflet
- Graphql Code Generator

### Mobile

- Typescript
- Expo + React Native
- React Native Maps
- React Native Paper
- Apollo Client
- Redux Toolkit
- Graphql Code Generator

### Infrastructure

- Postgres
- Husky
- Nginx
- Certbot
- Github Actions
- Docker
- Vercel
- Digital Ocean

### APIs

- Stripe
- Geoapify
- AWS S3
- Google Directions API

## Packages

| Packages          |       Description        |
| :---------------- | :----------------------: |
| `packages/server` |  NestJS Graphql Server   |
| `packages/web`    |    Nextjs Web Client     |
| `packages/mobile` | Expo React Native Client |

## Scripts

| Script            |         Description         |
| :---------------- | :-------------------------: |
| `yarn infra:up`   |   Start Docker containers   |
| `yarn infra:down` | Shut down Docker containers |
| `yarn dev:server` |        Start server         |
| `yarn dev:web`    |      Start web client       |
| `yarn dev:mobile` |     Start mobile client     |
| `yarn commit`     |       Run Commitizen        |
| `yarn lint`       |    Lint entire workspace    |
| `yarn prepare`    |     Install husky hooks     |

## Requirements

- To run this project you need to have `node`, `yarn` and `docker` installed.
- Refer to the `.env.*.example` in the server, web and mobile packages to see what env variables are
  needed to start the application correctly.
- For payments you will need a Stripe development account and add the public key to
  `packages/mobile/.env` and the private key to `packages/server/.env`.
- The server uses Stripe, Geoapify and AWS S3. You'll need to add the corresponding keys to
  `packages/server/.env` file.
- The mobile app requires a valid Google Directions API key in `packages/mobile/.env` to work
  correctly.

## Getting started

To get up and running follow these steps

- Install the dependencies by running `yarn` in the root of the project.
- Start the docker container with `yarn infra:up`
- Start the server with `yarn dev:server`
- Start the web client with `yarn dev:web`
- Start the mobile client with `yarn dev:mobile`

## Development Guide

After modifying the graphql schemas in the server or writing new graphql
queries/mutations/subscriptions in the web/mobile client, run `yarn codegen` in the corresponding
package folder to sync the schemas and generate new frontend code.

Be careful to be in the right package folder when installing dependencies. Although dependencies in
this monorepo are stored on the top level node_modules, they must be installed in their
corresponding package.json.

## CI/CD

This project uses Vercel's github integration to automate deployments. Github Actions are used to
automate the deployment of the server to digital ocean. The `docker-compose.yml` file in
`packages/server` is used for production and will start up Nginx, Certbot, Watchtower and Postgres
in the host VPS.

## Contributing

This project is using the
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Use
`yarn commit` or `git cz` if you have `commitizen` installed globally to check for linting errors
before commiting and standardizing your commit messages.

## Authors

- Nelson Fleig - [Github](https://github.com/nelsonfleig)
- Viktor Hajdu - [Github](https://github.com/Vitto44)
- Guillem Sardà Parreu - [Github](https://github.com/guillemsarda)
- Brandon Dickson - [Github](https://github.com/brandond98)
