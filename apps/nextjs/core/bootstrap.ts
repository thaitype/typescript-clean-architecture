import 'dotenv/config';

import { getDbContext, type DbContextWithSchema } from '@thaitype.com/database-drizzle';

export const getEnvVariable = (name: string) => {
  const value = process.env[name];
  if (value == null) throw new Error(`environment variable ${name} not found`);
  return value;
};

export const dbContext: DbContextWithSchema = getDbContext(getEnvVariable('DATABASE_URL'));
