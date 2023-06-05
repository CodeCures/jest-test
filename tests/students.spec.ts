import Students from "../src/students";
import User from "../src/user";

describe('Students', () => {

    const user = new User({
        firstName: "Courage",
        lastName: "Francis"
    });

    it('registers a user as student', () => {

        const students = new Students;
        students.addUser(user)

        expect(students.all).toHaveLength(1);
    })

    it('registers more than a user as student', () => {
        
        const user2 = new User({
            firstName: "Foo",
            lastName: "Bar"
        });

        const students = new Students;
        students.addUser(user)
        students.addUser(user2)

        expect(students.all).toHaveLength(2);
    })

    it('matches student records', () => {
        
        const user2 = new User({
            firstName: "Foo",
            lastName: "Bar"
        });

        const students = new Students;
        students.addUser(user)
        students.addUser(user2)

        expect(students.all).toMatchSnapshot();
    })


    it('is an instance of user', () => {

        const students = new Students;
        students.addUser(user)

        expect(students.getUser(0)).toBeInstanceOf(User)
    })

})