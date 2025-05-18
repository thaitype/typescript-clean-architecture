import 'dotenv/config';

<<<<<<< HEAD
import { getDbContext, seed } from '@acme/database-drizzle';
=======
import { getDbContext, seed } from '@thaitype.com/database-drizzle';
>>>>>>> upstream/main
import { getEnvVariable } from './utils';

seed(getDbContext(getEnvVariable('DATABASE_URL')));
