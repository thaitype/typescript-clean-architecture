# TypeScript Clean Architecture

[![Test and Build](https://github.com/thaitype/typescript-clean-architecture/actions/workflows/test-and-build.yml/badge.svg)](https://github.com/thaitype/typescript-clean-architecture/actions/workflows/test-and-build.yml)

> In progess!

This is turborepo starter with Drizzle ORM and PostgreSQL pre-configured.

> [!NOTE]
> This example uses `pnpm` as package manager.

## Using this example

Clone the repository:

```sh
git clone https://github.com/htsh-tsyk/turbo-drizzle.git
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/database`: Drizzle ORM wrapper to manage & access your database
- `@repo/ui`: a stub React component library shared by a `web` application
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Drizzle for database ORM](https://orm.drizzle.team/) for database ORM

### Build

To build all apps and packages, run the following command:

```
cd turbo-drizzle
cp apps/web/.env.default apps/web/.env
pnpm install
pnpm build
```

### Database

We use [Drizzle ORM](https://orm.drizzle.team/) to manage & access our database. As such you will need a database for this project, either locally or hosted in the cloud.

To make this process easier, we offer a [`docker-compose.yml`](https://docs.docker.com/compose/) file to deploy a PostgreSQL server locally with a new database named `repo_development` (To change this update the `POSTGRES_DB` environment variable in the `docker-compose.yml` file):

```bash
cd turbo-drizzle
docker-compose up -d
```

Once deployed you will need to copy the `.env.default` file to `.env` in order for Drizzle to have a `DATABASE_URL` environment variable to access.

```bash
cp apps/web/.env.default apps/web/.env
```

If you added a custom database name, or use a cloud based database, you will need to update the `DATABASE_URL` in your `.env` accordingly.

Once deployed & up & running, you will need to create & deploy migrations to your database to add the necessary tables. This can be done using [Drizzle Migrate](https://orm.drizzle.team/docs/migrations):

in `database` package: (command `drizzle-kit generate`)

```
pnpm generate
```

```bash
pnpm turbo db:migrate
```

An optional additional step is to seed some initial or fake data to your database.

To do this update check the seed script located in `packages/database/scripts/seed.ts` & add or update any users you wish to seed to the database.

Once edited run the following command to run tell Drizzle to run the seed script defined in the Drizzle configuration:

```bash
pnpm turbo db:seed
```

### Develop

To develop all apps and packages, run the following command:

```shell
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## References
- Drizzle Turbo Repo Template: https://github.com/htsh-tsyk/turbo-drizzle/tree/main
- Next.js Clean Architecture: https://github.com/nikolovlazar/nextjs-clean-architecture/tree/main
- Next.js 15 on turborepo template: https://github.com/vercel/turborepo/tree/c59da312df134cc1aaf7c269bc3cd0b78c073b07/examples/basic