import { User } from '@acme/domain';
import { IUserRepository } from '../interfaces/IUserRepository';

export class UserUseCase {
  constructor(private userRepo: IUserRepository) {}

  async create(data: { id: string; name: string; email: string }) {
    const user = new User(data.id, data.name, data.email);
    await this.userRepo.create(user);
  }

  async getById(id: string) {
    return this.userRepo.findById(id);
  }
}
