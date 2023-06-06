import User, { UserI } from "./user";

type DataType = User[] | User

export default class Student {
    collection: User[] = [];

    constructor(data?: DataType){
        if(data)
            Array.isArray(data) ? this.insert(data) : this.create(data)
    }

    create(user: User): void{
        this.collection.push(user);
    }

    insert(users: User[]): void {
        this.collection.push(...users);
    }

    all(): User[] {
        return this.collection.map(
            entry => Object.assign({}, entry)
        )
    }

    find(id: string): User | null{
        const entry = this.collection.find(entry => entry['id'] == id)

        return entry || null
    }

    update(id: string, data: any): boolean {
        let index = this.collection.findIndex(entry => entry.id === id);
        
        if(index < 0) return false;

        this.collection.splice(
            index,
            1, 
            Object.assign(this.collection[index], data)
        );
        
        return true;
    }

    delete(index: number): void {}
}