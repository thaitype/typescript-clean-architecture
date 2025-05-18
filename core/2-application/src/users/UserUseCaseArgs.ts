import type { User } from '@thaitype.com/domain';
import type { SystemMetadataKeys } from '@thaitype.com/domain';
import type { WithId } from '../types';

export type UserWithId = WithId<User>;

export type UseCaseIO<I, O> = {
  input: I;
  output: O;
};

export type UserUseCaseArgs = {
  create: UseCaseIO<Omit<User, 'id' | SystemMetadataKeys>, UserWithId>;

  getById: UseCaseIO<{ id: string }, UserWithId | null>;

  update: UseCaseIO<{ id: string; data: Partial<Omit<User, 'id' | SystemMetadataKeys>> }, UserWithId | null>;

  delete: UseCaseIO<{ id: string }, boolean>;

  list: UseCaseIO<void, UserWithId[]>;

  searchBy: UseCaseIO<Partial<Pick<User, 'name' | 'email'>>, UserWithId[]>;

  listWithPagination: UseCaseIO<
    { offset: number; limit: number },
    {
      items: UserWithId[];
      offset: number;
      limit: number;
      hasNext: boolean;
    }
  >;
};
