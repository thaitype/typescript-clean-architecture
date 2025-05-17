import { IUserRepository } from '@thaitype.com/application';
import { User } from '@thaitype.com/domain';

export class UserRepository implements IUserRepository {
  private users: Map<string, User> = new Map();

  async create(user: User): Promise<void> {
    this.users.set(user.id, user);
  }

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) ?? null;
  }
}
