import { createServiceRegistry } from '@thaitype/ioctopus';
import { IUserRepository, UserUseCase } from '@acme/application';
import { UserController } from '@acme/interface-adapters';

// prettier-ignore
export const registry = createServiceRegistry()
  .define('IUserRepository').mapTo<IUserRepository>()
  .define('UserUseCase').mapTo<UserUseCase>()
  .define('UserController').mapTo<UserController>();
