interface IPerson {
    name: string;
    age: number;
    speak: () => void;
    /** Non arrow function */
    // speak2(): void;
}

class Person implements IPerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    speak = () => console.log('Name: ' + this.name + ', Age: ' + this.age);
}

const p1 = new Person('Joey', 47);
p1.speak();
