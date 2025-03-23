import { User } from "@acme/domain/entities";

export interface IUserRepository {
  create(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
}
