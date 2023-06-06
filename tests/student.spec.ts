import { v4 as uuidv4 } from 'uuid';
import Student from "../src/student";
import User from "../src/user";

test('new works', () => {
    expect(new Student).toBeInstanceOf(Student);
})

test('student structure', () => {
    expect(new Student).toEqual(expect.objectContaining({
        collection: expect.any(Array),
        create: expect.any(Function),
        insert: expect.any(Function),
        all: expect.any(Function),
        find: expect.any(Function),
        update: expect.any(Function),
        delete: expect.any(Function)
    }));
});


describe('create', () => {
    const user = new User({id: uuidv4(), firstName: "Courage", lastName: "Francis"});

    it('can add to the data collection', () => {
        const student = new Student;
        student.create(user);

        expect(student.collection).toEqual([user]);
    });

    it('gets called when data is passed to constructor', () => {

        const spy = jest.spyOn(Student.prototype, 'create');
        const student = new Student(user);

        expect(spy).toHaveBeenCalled()
        spy.mockRestore()
    });

})


describe('insert', () => {
    const users = [
        new User({id: uuidv4(), firstName: "Courage", lastName: "Francis"}),
        new User({id: uuidv4(), firstName: "Foo", lastName: "Bar"})
    ];

    it('can add to the data collection', () => {
        const student = new Student;
        student.insert(users);

        expect(student.collection).toEqual(users);
    });

    it('gets called when data is passed to constructor', () => {

        const spy = jest.spyOn(Student.prototype, 'insert');
        const student = new Student(users);

        expect(spy).toHaveBeenCalled()
        spy.mockRestore()
    });
})

describe('all', () => {
    const user = new User({
        id: uuidv4(),
        firstName: "Courage",
        lastName: "Francis"
    });

    it('returns empty student', () => {
        const student = new Student;

        expect(student.all()).toEqual([]);
    });
});

describe('find', () => {
    const user = new User({
        id: uuidv4(),
        firstName: "Courage",
        lastName: "Francis"
    });

    let student: Student;

    beforeAll(() => {
        student = new Student(user)
    })

    it('returns null on data not found', () => {

        expect(student.find('1')).toBeNull()
    });

    it('returns found student data', () => {
        
        expect(student.find(user.id)).toEqual(user)
    });
})


describe('find', () => {
    const user = new User({
        id: uuidv4(),
        firstName: "Courage",
        lastName: "Francis"
    });

    let student: Student;

    beforeAll(() => {
        student = new Student(user)
    })

    it('updates entry by id', () => {
        student.update(user.id, {firstName: "anotherName"});

        let currentUser = student.find(user.id);
        
        expect(currentUser?.getFirstName()).toEqual('anotherName')
    });

    it('returns false if no entry matches', () => {
        expect(student.update('19012', {})).toBeFalsy()
    });
})