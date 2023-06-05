import User from "./user";

export default class Students {
    private users: User[] = [];

    addUser(user: User): void{
        this.users.push(user);
    }

    getUser(index: number) : User {
        return this.users[index];
    }

    get all(): User[] {
        return this.users;
    }
}