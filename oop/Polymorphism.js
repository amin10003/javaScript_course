//  class Shape {
//       area() {
//         return "Area not defined for generic shape.";
//       }
//     }

//     // Circle class
//     class Circle extends Shape {
//       constructor(radius) {
//         super();
//         this.radius = radius;
//       }

//       area() {
//         return Math.PI * this.radius * this.radius;
//       }
//     }

//     // Rectangle class
//     class Rectangle extends Shape {
//       constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//       }

//       area() {
//         return this.width * this.height;
//       }
//     }

//     // Triangle class
//     class Triangle extends Shape {
//       constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//       }

//       area() {
//         return 0.5 * this.base * this.height;
//       }
//     }

//     // Function to show area
//     function showArea(shapeType) {
//       let shape;
//       if (shapeType === "circle") {
//         shape = new Circle(5);
//       } else if (shapeType === "rectangle") {
//         shape = new Rectangle(4, 6);
//       } else if (shapeType === "triangle") {
//         shape = new Triangle(3, 7);
//       }

     
//     }





class Shape {
    area(){
        console.log("Calculating area....");
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    
    }

    area(){
        console.log(`Circle area: ${Math.PI * this.radius ** 2}`);
    }
}

class Rectangle extends Shape{
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        console.log(`Reactangle area: ${this.width * this.height}`);
    }
}


// const shapes = [new Circle(5), new Rectangle(6, 8)];
// shapes.forEach((shape) => shape.area())


let circle1 = new Circle(45);
circle1.area();


let rectangle = new Rectangle(9,4);
rectangle.area();


















