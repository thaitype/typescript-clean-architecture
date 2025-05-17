import 'dotenv/config';

import { getDbContext, seed } from '@thaitype.com/database-drizzle';
import { getEnvVariable } from './utils';

seed(getDbContext(getEnvVariable('DATABASE_URL')));
