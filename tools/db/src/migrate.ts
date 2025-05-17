import 'dotenv/config';

import { getDbContext, migrate } from '@thaitype.com/database-drizzle';
import { getEnvVariable } from './utils';

migrate({
  ...getDbContext(getEnvVariable('DATABASE_URL')),
  migrationsFolder: '../../migrations/drizzle',
});
