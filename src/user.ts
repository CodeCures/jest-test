export interface UserI {
  id: string,
  firstName: string,
  lastName: string
}

export default class User {
  public id: string;
  private firstName: string;
  private lastName: string;

  constructor(detail: UserI) {
    const { id, firstName, lastName } = detail
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }


  get name(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
