import { createContainer, createModule } from '@thaitype/ioctopus';
import { registry } from './ServiceRegistry';
import { UserRepository } from '@thaitype.com/infrastructure';
import { UserUseCase } from '@thaitype.com/application';
import { UserController } from '@thaitype.com/interface-adapters';

const appModule = createModule(registry);

appModule.bind('IUserRepository').toClass(UserRepository);

appModule.bind('UserUseCase').toClass(UserUseCase, ['IUserRepository']);

appModule.bind('UserController').toClass(UserController, ['UserUseCase']);

export const container = createContainer(registry);
container.load('app', appModule);

export function getInjection<Key extends keyof typeof registry.keyMap>(token: Key) {
  return container.get(token);
}
