import { createServiceRegistry } from '@thaitype/ioctopus';
import { MongooseClient } from '@acme/infrastructure';
import { type IUserRepository, UserUseCase } from '@acme/application';
import { UserController } from '@acme/interface-adapters';
import type { ILogger } from '@acme/shared';

// prettier-ignore
export const registry = createServiceRegistry()
  .define('ILogger').mapTo<ILogger>()
  // MongooseClient
  .define('MongooseClient').mapTo<MongooseClient>()
  // Application Level
  .define('IUserRepository').mapTo<IUserRepository>()
  .define('UserUseCase').mapTo<UserUseCase>()
  .define('UserController').mapTo<UserController>();
