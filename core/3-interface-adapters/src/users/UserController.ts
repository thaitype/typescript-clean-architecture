import { UserUseCase, type UserUseCaseArgs } from '@thaitype.com/application';
import type { ILogger } from '@thaitype.com/shared';

export class UserController {
  constructor(
    private readonly useCase: UserUseCase,
    private readonly logger: ILogger
  ) {}

  async create(input: UserUseCaseArgs['create']['input']) {
    this.logger.debug('UserController.create', { input });
    return this.useCase.create(input);
  }

  async getById(id: string) {
    this.logger.debug('UserController.getById', { id });
    return this.useCase.getById(id);
  }

  async update(input: UserUseCaseArgs['update']['input']) {
    this.logger.debug('UserController.update', { input });
    return this.useCase.update(input);
  }

  async delete(id: string) {
    this.logger.debug('UserController.delete', { id });
    return this.useCase.delete({ id });
  }

  async list() {
    this.logger.debug('UserController.list');
    return this.useCase.list();
  }

  async searchBy(criteria: UserUseCaseArgs['searchBy']['input']) {
    this.logger.debug('UserController.searchBy', { criteria });
    return this.useCase.searchBy(criteria);
  }

  async listWithPagination(params: UserUseCaseArgs['listWithPagination']['input']) {
    this.logger.debug('UserController.listWithPagination', { params });
    return this.useCase.listWithPagination(params);
  }
}
