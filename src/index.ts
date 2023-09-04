import { Dog } from "./dog";
import { Duck } from "./duck";
import { Monitor } from "./monitor";


const dog = new Dog();
dog.bark();

/* 1) TS Simple Types(primitive) 
- boolean : true or false values
- number : whole numbers and floating point values
- string : text values like "TypeScript Rocks" 
Type Assignment
- Explicit
- Implicit */
let firstName: string = "neerajan"; /* Explicit */
console.log(firstName);

let lastName = "rai" /* Implicit */
console.log(lastName);



/* 2) TS Special Types 
- 'any' is a type that disables type checking and effectively allows all types to be used.
- 'unknown' similar, but safer alternative to any. */
let x = 23.6411;
x = "string"; /* error: Type 'string' is not assignable to type 'number'. */

let u: any = true; 
u = "string"; /* there should be error because string is not assignable to boolean type but 'any' is used to get past errors*/
console.log(Math.round(u)); /* output: NaN */



/* 3) TS Array
- readonly keyword can prevent arrays from being changed */
const cars = ["volvo", "toyota", "porsche"];
console.log(cars);
let hyper: string = cars[2];
console.log(hyper);

const names: string[] = [];
names.push("Layne");
console.log(names);

const places: readonly string[] = ["mustang"];
places.push("makalu"); /* error: Property 'push' does not exist on type 'readonly string[]'. */
 
const numbers = [1, 2, 3];
numbers.push(2);
console.log(numbers);
numbers.push("7"); /* error: Argument of type 'string' is not assignable to parameter of type 'number'. */

let head: number = numbers[0];
console.log(head);



/* 4) TS Tuples
- tuple is a typed array with a pre-defined length and types for each index.
- readonly tuple, A good practice is to make your tuple readonly
- named tuple, allows us to provide context for our values at each index
- destructing tuples */
let mix: [number, string, boolean];
mix = [6, "was not dark", false];
console.log(mix);

let laptop: [string, number];
laptop = ["dell", 38];
laptop.push("acer"); /* no type safety in our tuple for index 2+ */
console.log(laptop);

const mouse: readonly [string, number] = ["dell", 23];
mouse.push("lenovo"); /* error: Property 'push' does not exist on type 'readonly [string, number]'. */

const graph: [x: number, y: number] = [22.5, 21];
console.log(graph);

const coordinate: [number, number] = [2,3];
const [a, b] = coordinate;
console.log([a, b]);



/* 5) TS Object Types */
const car: {type: string, model: string, year: number} = {
    type: "Toyota",
    model: "supra",
    year: 2005
};
console.log(car);

const bike = {type: "Suzuki"};
bike.type = "yamaha";
bike.type = 3;  /* error: Type 'number' is not assignable to type 'string' */

const number = {first: 1, second: 2};
number.first = 3;
console.log(number);
console.log(number.second);

const company: {nname: string, yyear: number} = { /* error: Property 'yyear' is missing in type '{ nname: string; }' but required in type '{ nname: string; yyear: number; }'. */
    nname : "booring",
};
company.yyear = 2000;
console.log(company);

const ccompany: {nnname: string, yyyear?: number} = { /* No error because of optional property '?' */
    nnname: "tesla",
};
ccompany.yyyear = 2001,
console.log(ccompany);

const nameAge : {[index:string]: number} = {}; /* Index signature can be used to for objects without defined properties */
nameAge.neerajan = 13;
nameAge.bob = 14;
console.log(nameAge);



/* 6) TS Enums
- special class that represents a group of constants
- enum come is two flavors String and Numeric */
enum CardinalDirection {East, West, North, South};
let myDirection = CardinalDirection.South;
console.log(myDirection);  /* by default enum initialize the first value to 0 hence fourth value as 3. hence displays 3 */

enum location { right = 1, left, up, down};  /* setting value of the first numeric enum and have iot auto increment from that*/
let myLocation = location.up;
console.log(myLocation);  /* displays 3 */

enum status { /* assigning unique numbers for each enum values */
    found = 17,
    notFound = 19,
    accept = 50,
    badRequest = 200
}
console.log(status.accept);

enum partner {  /* string enum */
    ram = "sita",
    shiva = "parbati"
}
console.log(partner.shiva);



/* 7) TS Type Aliases and Interfaces
- TS allows types to be defined seperately from the variables that use them
- Aliases and interfaces allows types to be easily shared between different variables/objects  */

/* Interface */
interface Rectangle { /* Interface only apply to object types */
    height: number,
    width: number
};
const rectangle: Rectangle = {
    height: 20,
    width: 5
};
console.log(rectangle);

/* extend interface */
interface ColoredRectangle extends Rectangle{
    color: string
};
const colorRectangle: ColoredRectangle = {
    height: 10,
    width: 8,
    color: "green"
}
console.log(colorRectangle);

/* type aliases */
type CarYear = number;
type CarName = string;
type Car = {
    year: CarYear,
    name: CarName
};
const CY: CarYear = 2009;
const CN: CarName = "Toyota";
const C:Car = {
    year: CY,
    name: "ferrari"
};
console.log(C)
console.log(CY);

let myCarName:CarName = "Porsche";
console.log(myCarName);
let myCarYear: CarYear = "2019";  /* error: Type 'string' is not assignable to type 'number'. */
console.log(myCarYear);



/* 8) TS Union Types (OR) */
function printCode(code: string|number){
    console.log(`my code is ${code}`);
}
printCode(200);
printCode("hello");

function toPrint(value: string|number){
    console.log(`the value to be print is ${value.toUpperCase()}`); /* error: Property 'toUpperCase' does not exist on type 'string | number'.
                                                                       Property 'toUpperCase' does not exist on type 'number'. */
}
toPrint("Ohayo");

function printValue(val: string){
    console.log(`print value is ${val.toUpperCase()}`);
}
printValue("to uppercase");



/* 9) TS Function:
        1) return type
        2) void type */

 /* return type */
function getTime(): number {      /* 'number' specifies this function returns number type */
    return new Date().getTime();
}
console.log(getTime());

function noReturnType() {   /* If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned. */
    return "hello";
}
console.log(noReturnType());

 /* void type */
function bottle(): void {  /* void type */
    console.log("this is a bottle");
}
bottle();

 /* optional parameter */
function add(a: number, b: number, c?:number){
    return a*b*(c||0); /* value of c is either passed value or 0 */
}
console.log(add(5,2)); /* parameter c is optional that's why it is not showing any error even though we have only passed 2 parameters */

 /* default parameter */
function pow(value: number, exponent: number = 3){
    return value**exponent;
}
console.log(pow(2));

 /* named parameter */
 function bed({length, width}:{length: number, width: number}){
    return length*width;
 }
 console.log(`area of your bed is ${bed({length:5, width:4})}`);
 console.log(bed({length:5, width:4}));

 /* rest parameter (rest parameter are always array)*/
 function addition(a: number, b: number, ...rest: number[]){
    return a + b + rest.reduce((p, c)=>p + c, 0)
 }
 console.log(addition(2, 2, 2, 2, 2, 2));

 function Greeting(greeting: string, ...names: string[]){
    return greeting +" "+ names.join(", ") + "!";
 }
 console.log(Greeting("Morning", "bob", "dave", "layne"));
 console.log(Greeting("Howdy"));

 /* type alias (Function types can be specified separately from functions with type aliases) */
 type Negative = (value: number) => number
 const negativeNumber: Negative = (value) => value * -1;
 console.log(negativeNumber(10));



 /* 10) TS Casting
    - Casting is the process of overriding a type
    - Casting doesn't actually change the type of the data within the variable */
/* casting with 'as' */
let xy: unknown = "howdy";
console.log((xy as string).length);
console.log(xy.length); /* error: 'xy' is of type 'unknown'.*/

let yz: unknown = 5;
console.log((yz as string).length);  /* prints 'undefined' since the variable still hold the number */

/* casting with '<>' */
console.log((<string>xy).length);

/* force casting
    - To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type. */
let za = "howdy";
console.log(((za as unknown) as string).length);



/* 11) TS Classes */
class Cat {
    name: string = "";
}
const cat = new Cat();
cat.name = "sneaky";
console.log(cat.name); 

const duck = new Duck(); /* imported from duck.ts */
duck.name = "coco";
duck.sound();
console.log(duck.name);

const monitor = new Monitor("samsung");
console.log(monitor.getName()); /* monitor.name isn't accessible from outside the class since it is private. see monitor.ts */

class Mpad {
    public constructor(private name: string){  /* TypeScript provides a convenient way to define class members in the constructor, 
                                                    by adding a visibility modifiers to the parameter. */

    }
    public getPadName(){
        return this.name;
    }
}
const mousepad = new Mpad("fantech");
console.log(mousepad.getPadName());

class Mic {
    name: string = "";
    getMicName( naam: string){
        return this.name = naam;
    }
}
const mic = new Mic();
console.log(mic.getMicName("sus"));