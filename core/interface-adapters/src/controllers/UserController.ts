import { UserUseCase } from '@acme/application';

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  async create(req: any) {
    await this.userUseCase.create(req.body);
    return { status: 'User created' };
  }

  async get(req: any) {
    const user = await this.userUseCase.getById(req.params.id);
    return user ?? { error: 'User not found' };
  }
}
