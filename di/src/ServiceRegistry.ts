import { createServiceRegistry } from '@thaitype/ioctopus';
import { MongooseClient } from '@thaitype.com/infrastructure';
import { type IUserRepository, UserUseCase } from '@thaitype.com/application';
import { UserController } from '@thaitype.com/interface-adapters';
import type { ILogger } from '@thaitype.com/shared';

// prettier-ignore
export const registry = createServiceRegistry()
  .define('ILogger').mapTo<ILogger>()
  // MongooseClient
  .define('MongooseClient').mapTo<MongooseClient>()
  // Application Level
  .define('IUserRepository').mapTo<IUserRepository>()
  .define('UserUseCase').mapTo<UserUseCase>()
  .define('UserController').mapTo<UserController>();
