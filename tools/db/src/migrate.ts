import 'dotenv/config';

<<<<<<< HEAD
import { getDbContext, migrate } from '@acme/database-drizzle';
=======
import { getDbContext, migrate } from '@thaitype.com/database-drizzle';
>>>>>>> upstream/main
import { getEnvVariable } from './utils';

migrate({
  ...getDbContext(getEnvVariable('DATABASE_URL')),
  migrationsFolder: '../../migrations/drizzle',
});
