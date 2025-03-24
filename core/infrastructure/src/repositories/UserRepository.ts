import { IUserRepository } from '@acme/application/interfaces/IUserRepository';
import { User } from '@acme/domain';

export class UserRepository implements IUserRepository {
  private users: Map<string, User> = new Map();

  async create(user: User): Promise<void> {
    this.users.set(user.id, user);
  }

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) ?? null;
  }
}
