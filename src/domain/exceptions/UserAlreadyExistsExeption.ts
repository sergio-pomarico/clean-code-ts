export default class UserAlreadyExistsExeption extends Error {
  constructor() {
    super('User already exists');
  }
}
