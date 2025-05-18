import type { UserUseCaseArgs as Args } from './UserUseCaseArgs';

export interface IUserRepository {
  create(data: Args['create']['input']): Promise<Args['create']['output']>;

  getById(id: Args['getById']['input']['id']): Promise<Args['getById']['output']>;

  update(input: Args['update']['input']): Promise<Args['update']['output']>;

  delete(id: Args['delete']['input']['id']): Promise<Args['delete']['output']>;

  list(): Promise<Args['list']['output']>;

  searchBy(criteria: Args['searchBy']['input']): Promise<Args['searchBy']['output']>;

  listWithPagination(params: Args['listWithPagination']['input']): Promise<Args['listWithPagination']['output']>;
}
