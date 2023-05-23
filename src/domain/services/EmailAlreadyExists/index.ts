import { User } from '@domain/entities';
import { UserRepository } from '@domain/repositories';

export default class EmailAlreadyExists {
  private readonly _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async check(email: string): Promise<boolean> {
    const user: User = await this._userRepository.getByEmail(email);
    return user != null;
  }
}
