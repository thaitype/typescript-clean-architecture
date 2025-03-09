import { users } from "./schema";
import { DbContext } from "./database";

/**
 * Execute seed the database
 */
export async function seed(dbContext: DbContext) {
  const { client, db } = dbContext;
  for (let i = 0; i < 10; i++) {
    await db.insert(users).values({ name: `Author ${i}` });
  }
  await client.end();
}

