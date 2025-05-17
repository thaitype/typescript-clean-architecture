import { createServiceRegistry } from '@thaitype/ioctopus';
import { IUserRepository, UserUseCase } from '@thaitype.com/application';
import { UserController } from '@thaitype.com/interface-adapters';

// prettier-ignore
export const registry = createServiceRegistry()
  .define('IUserRepository').mapTo<IUserRepository>()
  .define('UserUseCase').mapTo<UserUseCase>()
  .define('UserController').mapTo<UserController>();
