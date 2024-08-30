// Define a class Rectangle that implements the Shape interface
var Rectangle = /** @class */ (function () {
    // Constructor
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    // Implement the area method from the Shape interface
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    // Implement the perimeter method from the Shape interface
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
// Create a new Rectangle object
var rectangle = new Rectangle(5, 10);
// Calculate and display the area and perimeter
console.log("Rectangle Area:", rectangle.area());
console.log("Rectangle Perimeter:", rectangle.perimeter());
