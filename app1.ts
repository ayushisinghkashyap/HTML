class Person {
    // Properties
    private firstName: string;
    private lastName: string;

    // Constructor
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to get full name
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Create instances of the Person class
const person1 = new Person("Archit", "Goel");
const person2 = new Person("Neeraj", "Mittal");

// Display full names
console.log(person1.getFullName());
console.log(person2.getFullName());
