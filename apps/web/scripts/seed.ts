import 'dotenv/config';

import { getDbContext, seed } from "@acme/database-drizzle";
import { getEnvVariable } from './utils';

seed(getDbContext(getEnvVariable("DATABASE_URL")));