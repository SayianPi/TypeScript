"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dog_1 = require("./dog");
const duck_1 = require("./duck");
const monitor_1 = require("./monitor");
const dog = new dog_1.Dog();
dog.bark();
/* 1) TS Simple Types(primitive)
- boolean : true or false values
- number : whole numbers and floating point values
- string : text values like "TypeScript Rocks"
Type Assignment
- Explicit
- Implicit */
let firstName = "neerajan"; /* Explicit */
console.log(firstName);
let lastName = "rai"; /* Implicit */
console.log(lastName);
/* 2) TS Special Types
- 'any' is a type that disables type checking and effectively allows all types to be used.
- 'unknown' similar, but safer alternative to any. */
let x = 23.6411;
x = "string"; /* error: Type 'string' is not assignable to type 'number'. */
let u = true;
u = "string"; /* there should be error because string is not assignable to boolean type but 'any' is used to get past errors*/
console.log(Math.round(u)); /* output: NaN */
/* 3) TS Array
- readonly keyword can prevent arrays from being changed */
const cars = ["volvo", "toyota", "porsche"];
console.log(cars);
let hyper = cars[2];
console.log(hyper);
const names = [];
names.push("Layne");
console.log(names);
const places = ["mustang"];
places.push("makalu"); /* error: Property 'push' does not exist on type 'readonly string[]'. */
const numbers = [1, 2, 3];
numbers.push(2);
console.log(numbers);
numbers.push("7"); /* error: Argument of type 'string' is not assignable to parameter of type 'number'. */
let head = numbers[0];
console.log(head);
/* 4) TS Tuples
- tuple is a typed array with a pre-defined length and types for each index.
- readonly tuple, A good practice is to make your tuple readonly
- named tuple, allows us to provide context for our values at each index
- destructing tuples */
let mix;
mix = [6, "was not dark", false];
console.log(mix);
let laptop;
laptop = ["dell", 38];
laptop.push("acer"); /* no type safety in our tuple for index 2+ */
console.log(laptop);
const mouse = ["dell", 23];
mouse.push("lenovo"); /* error: Property 'push' does not exist on type 'readonly [string, number]'. */
const graph = [22.5, 21];
console.log(graph);
const coordinate = [2, 3];
const [a, b] = coordinate;
console.log([a, b]);
/* 5) TS Object Types */
const car = {
    type: "Toyota",
    model: "supra",
    year: 2005
};
console.log(car);
const bike = { type: "Suzuki" };
bike.type = "yamaha";
bike.type = 3; /* error: Type 'number' is not assignable to type 'string' */
const number = { first: 1, second: 2 };
number.first = 3;
console.log(number);
console.log(number.second);
const company = {
    nname: "booring",
};
company.yyear = 2000;
console.log(company);
const ccompany = {
    nnname: "tesla",
};
ccompany.yyyear = 2001,
    console.log(ccompany);
const nameAge = {}; /* Index signature can be used to for objects without defined properties */
nameAge.neerajan = 13;
nameAge.bob = 14;
console.log(nameAge);
/* 6) TS Enums
- special class that represents a group of constants
- enum come is two flavors String and Numeric */
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["East"] = 0] = "East";
    CardinalDirection[CardinalDirection["West"] = 1] = "West";
    CardinalDirection[CardinalDirection["North"] = 2] = "North";
    CardinalDirection[CardinalDirection["South"] = 3] = "South";
})(CardinalDirection || (CardinalDirection = {}));
;
let myDirection = CardinalDirection.South;
console.log(myDirection); /* by default enum initialize the first value to 0 hence fourth value as 3. hence displays 3 */
var location;
(function (location) {
    location[location["right"] = 1] = "right";
    location[location["left"] = 2] = "left";
    location[location["up"] = 3] = "up";
    location[location["down"] = 4] = "down";
})(location || (location = {}));
; /* setting value of the first numeric enum and have iot auto increment from that*/
let myLocation = location.up;
console.log(myLocation); /* displays 3 */
var status;
(function (status) {
    status[status["found"] = 17] = "found";
    status[status["notFound"] = 19] = "notFound";
    status[status["accept"] = 50] = "accept";
    status[status["badRequest"] = 200] = "badRequest";
})(status || (status = {}));
console.log(status.accept);
var partner;
(function (partner) {
    partner["ram"] = "sita";
    partner["shiva"] = "parbati";
})(partner || (partner = {}));
console.log(partner.shiva);
;
const rectangle = {
    height: 20,
    width: 5
};
console.log(rectangle);
;
const colorRectangle = {
    height: 10,
    width: 8,
    color: "green"
};
console.log(colorRectangle);
const CY = 2009;
const CN = "Toyota";
const C = {
    year: CY,
    name: "ferrari"
};
console.log(C);
console.log(CY);
let myCarName = "Porsche";
console.log(myCarName);
let myCarYear = "2019"; /* error: Type 'string' is not assignable to type 'number'. */
console.log(myCarYear);
/* 8) TS Union Types (OR) */
function printCode(code) {
    console.log(`my code is ${code}`);
}
printCode(200);
printCode("hello");
function toPrint(value) {
    console.log(`the value to be print is ${value.toUpperCase()}`); /* error: Property 'toUpperCase' does not exist on type 'string | number'.
                                                                       Property 'toUpperCase' does not exist on type 'number'. */
}
toPrint("Ohayo");
function printValue(val) {
    console.log(`print value is ${val.toUpperCase()}`);
}
printValue("to uppercase");
/* 9) TS Function:
        1) return type
        2) void type */
/* return type */
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function noReturnType() {
    return "hello";
}
console.log(noReturnType());
/* void type */
function bottle() {
    console.log("this is a bottle");
}
bottle();
/* optional parameter */
function add(a, b, c) {
    return a * b * (c || 0); /* value of c is either passed value or 0 */
}
console.log(add(5, 2)); /* parameter c is optional that's why it is not showing any error even though we have only passed 2 parameters */
/* default parameter */
function pow(value, exponent = 3) {
    return value ** exponent;
}
console.log(pow(2));
/* named parameter */
function bed({ length, width }) {
    return length * width;
}
console.log(`area of your bed is ${bed({ length: 5, width: 4 })}`);
console.log(bed({ length: 5, width: 4 }));
/* rest parameter (rest parameter are always array)*/
function addition(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(addition(2, 2, 2, 2, 2, 2));
function Greeting(greeting, ...names) {
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greeting("Morning", "bob", "dave", "layne"));
console.log(Greeting("Howdy"));
const negativeNumber = (value) => value * -1;
console.log(negativeNumber(10));
/* 10) TS Casting
   - Casting is the process of overriding a type
   - Casting doesn't actually change the type of the data within the variable */
/* casting with 'as' */
let xy = "howdy";
console.log(xy.length);
console.log(xy.length); /* error: 'xy' is of type 'unknown'.*/
let yz = 5;
console.log(yz.length); /* prints 'undefined' since the variable still hold the number */
/* casting with '<>' */
console.log(xy.length);
/* force casting
    - To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type. */
let za = "howdy";
console.log(za.length);
/* 11) TS Classes */
class Cat {
    constructor() {
        this.name = "";
    }
}
const cat = new Cat();
cat.name = "sneaky";
console.log(cat.name);
const duck = new duck_1.Duck(); /* imported from duck.ts */
duck.name = "coco";
duck.sound();
console.log(duck.name);
const monitor = new monitor_1.Monitor("samsung");
console.log(monitor.getName()); /* monitor.name isn't accessible from outside the class since it is private. see monitor.ts */
class Mpad {
    constructor(name) {
        this.name = name;
    }
    getPadName() {
        return this.name;
    }
}
const mousepad = new Mpad("fantech");
console.log(mousepad.getPadName());
class Mic {
    constructor() {
        this.name = "";
    }
    getMicName(naam) {
        return this.name = naam;
    }
}
const mic = new Mic();
console.log(mic.getMicName("sus"));
//# sourceMappingURL=index.js.map