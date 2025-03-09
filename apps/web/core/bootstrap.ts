import 'dotenv/config';

import { getDbContext, DbContextWithSchema } from "@acme/database-drizzle";
import { getEnvVariable } from '../scripts/utils';

export const dbContext: DbContextWithSchema = getDbContext(getEnvVariable("DATABASE_URL"));

