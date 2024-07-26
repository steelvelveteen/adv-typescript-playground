interface IPerson {
    firstName: string;
    age: number;
    speak: () => void;
    /** Non arrow function */
    // speak2(): void;
}

class Person implements IPerson {
    firstName: string;
    age: number;

    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }

    speak = () => console.log('Person Info: ' + this.firstName + ', Age: ' + this.age);
}

const p1 = new Person('Joey', 47);
p1.speak();

class Employee extends Person {
    employeeType: string;
    salary: number;

    constructor(firstName: string, age: number, employeeType: string, salary: number) {
        super(firstName, age);

        this.employeeType = employeeType;
        this.salary = salary;
    }

    speak = () =>
        console.log(
            'Employee Info: ' +
                this.firstName +
                ', Age: ' +
                this.age +
                ', Type: ' +
                this.employeeType +
                ', Salary: ' +
                this.salary
        );
}

const employee1 = new Employee('Maria Elizabeth Winstead', 39, 'Actress', 45000);
employee1.speak();
