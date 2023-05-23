import { User } from '@domain/entities';
import { UserAlreadyExistsExeption } from '@domain/exceptions';
import { UserRepository } from '@domain/repositories';
import { EmailAlreadyExists } from '@domain/services';

export class UserCreationUseCase {
  private readonly _userRepository: UserRepository;
  private readonly _emailAlreadyExists: EmailAlreadyExists;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
    this._emailAlreadyExists = new EmailAlreadyExists(userRepository);
  }

  async run(body: User): Promise<User> {
    const emailAlreadyTaken = await this._emailAlreadyExists.check(body.email);
    if (emailAlreadyTaken) throw new UserAlreadyExistsExeption();
    const userCreated: User = await this._userRepository.save(body);
    return userCreated;
  }
}
