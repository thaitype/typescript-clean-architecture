# Database

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