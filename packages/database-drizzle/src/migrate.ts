import { drizzle } from "drizzle-orm/postgres-js";
import { migrate as migrateSchema } from "drizzle-orm/postgres-js/migrator";
import { DbContext } from './database';

export interface MigrationOptions extends DbContext {
  migrationsFolder: string;
}

export async function migrate(options: MigrationOptions) {
  const { client, migrationsFolder } = options;
  await migrateSchema(drizzle(client), {
    // migrationsFolder: `${__dirname}/drizzle`,
    migrationsFolder
  });
  await client.end();
  process.exit(0);
};
