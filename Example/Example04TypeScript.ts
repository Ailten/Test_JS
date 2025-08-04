
//npx ts-node Example/Example04TypeScript.ts

// typage test.
let myString: string = "test";
console.log(`myString = ${myString}, type = ${typeof myString}`);

// basic type.
let myBool: boolean = true;
let myNum: number = 5;
let myStr: string = "test";
//bigint, for bigger number.
//symbol, for create unique identifier.

let myAnyType: any = "test"; // ! any depreciate !
let myNever: never; // error when put every type on it.
let myUndefined: undefined = undefined; // store undefined.
let myNumNullable: (number | null) = null; // store number or null.
let myUnknown: unknown = 5; // like any but safer.
let myArrayStr: string[] = ["A", "B"]; // an array of string.
let myFixArrayStr: readonly string[] = ["A", "B"]; // an array but can be only read (not edited).
let myTuple: [string, number] = ["test", 5]; // type tuple is an array with a length fix and specific type for eatch element.
let myNamedTuple: [x: number, y: number] = [2, 5]; // type tuple with a giving name for eatch element.

let myUser: {name: string, age: number} = { // type obj.
	name: "test",
	age: 5
}

let myVariousObj: { [index: string]: number } = {}; // type obj (with various and flexible property names).
myVariousObj.NameParamOne = 5;
myVariousObj.NameParamTwo = 7;

enum myEnum{ // example of enum (enum elemnts can be assigne a string as index).
	One = 0,
	Two
}
let myVarEnum: myEnum = myEnum.One;

type Car = { // example of create an alias type (define a new type complex can be use as type for other variable).
	year: number,
	wheel: number,
	gas: myEnum
}
let myCar: Car;

interface Camion { // interface is like alias, but for object only (interface can be extend/eritage like class).
	wheel: number,
	gas: myEnum
}

function print(msg: string | null){ // case example of using type in param function and union (can be two type or more).
	if(typeof msg === null)
		return;
	console.log(msg);
}

function add(a: number, b:number) : number { // example of type return (type return of a function can be "void").
	return a + b;
}

function optionalParam(a?: number){} // char "?" mark if the parameter is optional (can be call the function without sending, on this case parameter is undefined).

function funcWithRest(...a: number[]){} // "..." mark this parameter take various parameters send, in one array.

type myFuncSignature = (a: number, b: number) => number; // create a type for a signature of function.
let myAdd: myFuncSignature = (a, b) => a + b;

console.log( myUnknown as string ); // cast with "as" (from unknown).
console.log( <string> myUnknown ); // cast with "<>" (from unknow).

class Cat { // example of class with constructor (can extends other class, or implement interface).
	private name: string;
	public constructor(name: string) {
		this.name = name;
	}
	public getName(): string {
		return this.name;
	}
}
let myCat: Cat = new Cat("test");
console.log(myCat.getName());

class Dog extends Cat { // example of extends class and override (class or function can be mark abstract).
	public constructor(name: string) {
		super(name)
	}
	public override getName(): string {
		return `dog named ${super.getName()}`;
	}
}
let myDog: Dog = new Dog("test");
console.log(myDog.getName());

function customOr<A, B>(paramOne: A, paramTwo: B): A | B { // example of genertic type (can be used on param object and alias, and can have a default type send).
	return paramOne || paramTwo;
}
console.log(customOr<number, number>(5, 5));
console.log(customOr<string, string>("5", "5"));
function customOrTwo<A extends string | number, B = string>(paramOne: A, paramTwo: B): A | B { // exmaple of generic with extends and default type assigne.
	return paramOne || paramTwo;
}

interface Vector { // example of Partial, allow all parameter of object to be optional (can be not assigne a value), Required do the oposite effect (when a parameter has "?" marked as optional).
	x: number;
	y?: number;
}
let myVector: Partial<Vector> = {};

function printName(aCar: Car, property: keyof Car): any{ // example keyof, use as type for allow every "name parameter" of an object.
	return aCar[property];
}

class myBox { // exmaple of "!." for force axess to a value ignoring if it's null or undefined.
	public x: number | null = 5;
}
let myCurrentBox: myBox = new myBox();
console.log(myCurrentBox!.x);






