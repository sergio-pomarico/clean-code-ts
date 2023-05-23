import { User } from '@domain/entities';

export default interface UserRepository {
  getAll: () => Promise<User[]>;
  getById: (id: string) => Promise<User>;
  getByEmail: (email: string) => Promise<User>;
  save: (user: User) => Promise<User>;
  update: (user: User) => Promise<User>;
  delete: (user: User) => Promise<void>;
}
