import Students from "../src/students";
import User from "../src/user";

describe('Students', () => {
    it('it registers a user as student', () => {
        const user = new User({
            firstName: "Courage",
            lastName: "Francis"
        })

        const students = new Students;
        students.addUser(user)

        expect(students.all.length).toBe(1);

    })
})