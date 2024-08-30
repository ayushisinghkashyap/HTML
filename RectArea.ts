// Define an interface for a Shape
interface Shape {
    area(): number;
    perimeter(): number;
}

// Define a class Rectangle that implements the Shape interface
class Rectangle implements Shape {
    private width: number;
    private height: number;

    // Constructor
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // Implement the area method from the Shape interface
    area(): number {
        return this.width * this.height;
    }

    // Implement the perimeter method from the Shape interface
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Create a new Rectangle object
const rectangle = new Rectangle(5, 10);

// Calculate and display the area and perimeter
console.log("Rectangle Area:", rectangle.area());
console.log("Rectangle Perimeter:", rectangle.perimeter());
