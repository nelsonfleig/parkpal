# Parkpal

Group thesis project developed as part of Codework's Software Engineering bootcamp. Parkpal is a smart parking application that allow users to rent out their parking spaces to other drivers

## Packages

| Packages          |       Description        |
| :---------------- | :----------------------: |
| `packages/server` |      NestJS Server       |
| `packages/web`    |    Nextjs Web Client     |
| `packages/mobile` | Expo React Native Client |
| `packages/common` |     Shared packages      |

## Scripts

| Script                    |           Description           |
| :------------------------ | :-----------------------------: |
| `yarn infra:up`           |     Start Docker containers     |
| `yarn infra:down`         |   Shut down Docker containers   |
| `yarn dev:server`         |          Start server           |
| `yarn dev:web`            |        Start web client         |
| `yarn dev:mobile`         |       Start mobile client       |
| `yarn dev:web:codegen`    |  Generate graphql code in web   |
| `yarn dev:mobile:codegen` | Generate graphql code in mobile |

## Requirements

- To run this project you need to have `node`, `yarn` and `docker` installed.
- For payments you will need a Stripe development account and add the public key to
  `packages/web/.env.local` and the private key to `packages/server/.env`.
- Refer to the `.env.*.example` in the server and web packages to see what env variables are needed
  to start the application correctly.

## Getting started

To get up and running follow these steps

- Install the dependencies by running `yarn` in the root of the project.
- Start the docker container with `yarn infra:up`
- Start the server with `yarn dev:server`
- Start the web client with `yarn dev:web`
- Start the mobile client with `yarn dev:mobile`

## Development Guide

After modifying the graphql schemas in the server or writing new graphql
queries/mutations/subscriptions in the web/mobile client, run `yarn dev:web:codegen` or `yarn dev:mobile:codegen` from the root folder to sync the schemas and
generate new frontend code.

Be careful to be in the right package folder when installing dependencies. Although dependencies in
this monorepo are stored on the top level node_modules, they must be installed in their
corresponding package.json.

## Contributing

This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Use `yarn commit` or `git cz` if you have `commitizen` installed globally to check for linting
errors before commiting and standardizing your commit messages.
