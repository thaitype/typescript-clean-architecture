import type { IUserRepository } from './IUserRepository';
import type { UserUseCaseArgs } from './UserUseCaseArgs';

export class UserUseCase {
  constructor(private userRepo: IUserRepository) {}

  create(data: UserUseCaseArgs['create']['input']) {
    return this.userRepo.create(data);
  }

  getById(id: UserUseCaseArgs['getById']['input']['id']) {
    return this.userRepo.getById(id);
  }

  update(input: UserUseCaseArgs['update']['input']) {
    return this.userRepo.update(input);
  }

  delete(input: UserUseCaseArgs['delete']['input']) {
    return this.userRepo.delete(input.id);
  }

  list() {
    return this.userRepo.list();
  }

  searchBy(criteria: UserUseCaseArgs['searchBy']['input']) {
    return this.userRepo.searchBy(criteria);
  }

  listWithPagination(params: UserUseCaseArgs['listWithPagination']['input']) {
    return this.userRepo.listWithPagination(params);
  }
}
