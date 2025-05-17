import { User } from '@thaitype.com/domain';

export interface IUserRepository {
  create(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
}
