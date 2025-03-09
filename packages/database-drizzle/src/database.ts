import "dotenv/config";

import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

export interface DbContext<T extends Record<string, unknown> = Record<string, unknown>> {
  client: postgres.Sql;
  db: PostgresJsDatabase<T>;
}

export type DbContextWithSchema = DbContext<typeof schema>;

export function getDbContext(databaseUrl: string): DbContextWithSchema {
  const client = postgres(databaseUrl);
  const db = drizzle(client, { schema });
  return { client, db };
}

