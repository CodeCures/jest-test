import Students from "../src/students";
import User from "../src/user";

describe('Students', () => {
    it('registers a user as student', () => {
        const user = new User({
            firstName: "Courage",
            lastName: "Francis"
        })

        const students = new Students;
        students.addUser(user)

        expect(students.all.length).toBe(1);
    })

    it('registers more than a user as student', () => {
        const user1 = new User({
            firstName: "Courage",
            lastName: "Francis"
        });

        const user2 = new User({
            firstName: "Foo",
            lastName: "Bar"
        });

        const students = new Students;
        students.addUser(user1)
        students.addUser(user2)

        expect(students.all.length).toBe(2);
    })

    // it('fails when wrong data type is inserted', () => {
       
    //     const students = new Students;
        

    //     expect(students.addUser(new User({
    //         firstName: '',
    //         lastName: ''
    //     }))).toThrow(Error);
    // })

    it('is an instance of user', () => {
        const user = new User({
            firstName: "Courage",
            lastName: "Francis"
        })

        const students = new Students;
        students.addUser(user)

        expect(students.getUser(0)).toBeInstanceOf(User)
    })


})