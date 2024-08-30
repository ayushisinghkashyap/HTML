var Person = /** @class */ (function () {
    // Constructor
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Method to get full name
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
// Create instances of the Person class
var person1 = new Person("Archit", "Goel");
var person2 = new Person("Neeraj", "Mittal");
// Display full names
console.log(person1.getFullName());
console.log(person2.getFullName());
