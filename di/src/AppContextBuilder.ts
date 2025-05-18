import { createContainer, createModule } from '@thaitype/ioctopus';
import { registry } from './ServiceRegistry';

import { MongooseClient, MongooseUserRepository } from '@thaitype.com/infrastructure';
import { UserUseCase } from '@thaitype.com/application';
import { UserController } from '@thaitype.com/interface-adapters';

import type { AppConfig } from './AppConfig';
import { ConsoleLogger } from '@thaitype.com/shared';

export class AppContextBuilder {
  private readonly container = createContainer(registry);
  private mongo: MongooseClient;

  constructor(private config: AppConfig) {
    this.mongo = new MongooseClient(config.mongo.uri, config.mongo.options);
  }

  async init() {
    this.buildModule();
    await this.mongo.connect();
  }

  async shutdown() {
    await this.mongo.disconnect();
  }

  private buildModule() {
    this.container.load('infrastructure', this.buildInfrastructureModule());
    this.container.load('app', this.buildApplicationModule());
  }

  private buildApplicationModule() {
    const mod = createModule(registry);
    // --- Application Layer ---
    mod.bind('IUserRepository').toClass(MongooseUserRepository);
    mod.bind('UserUseCase').toClass(UserUseCase, ['IUserRepository']);
    mod.bind('UserController').toClass(UserController, ['UserUseCase', 'ILogger']);
    return mod;
  }

  private buildInfrastructureModule() {
    const mod = createModule(registry);
    // --- SharedControllerDeps ---
    mod.bind('ILogger').toClass(ConsoleLogger);
    // --- MongoDB ---
    mod.bind('MongooseClient').toValue(this.mongo);
    return mod;
  }

  get<Key extends keyof typeof registry.keyMap>(token: Key): (typeof registry.keyMap)[Key] {
    return this.container.get(token);
  }
}
