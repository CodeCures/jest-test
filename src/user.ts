interface UserI {
  firstName: string,
  lastName: string
}

export default class User {
  private firstName: string;
  private lastName: string;

  constructor(detail: UserI) {
    const { firstName, lastName } = detail
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
