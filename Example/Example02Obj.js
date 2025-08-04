
//node Example/Example02Obj.js

// example of object init freely.
let myObj = {
	id: 1,
	name: "Laaster"
};
console.log(`name ${myObj.id}: ${myObj.name}`);

// example using class.
class myClass {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
}
let myObjClass = new myClass(2, "Jester");
console.log(`name ${myObjClass.id}: ${myObjClass.name}`);

// exaple using prototype.
function myFuncProto(id, name){
	this.id = id;
	this.name = name;
}
let myObjProto = new myFuncProto(3, "Villa");
console.log(`name ${myObjProto.id}: ${myObjProto.name}`);


// adventage to class : eritage.
class myClassTwo extends myClass {
	constructor(id, name, language){
		super(id, name);
		this.language = language;
	}
}
let myObjClassTwo = new myClassTwo(4, "Julien", "fr");
console.log(`name ${myObjClassTwo.id}: ${myObjClassTwo.name}, language : ${myObjClassTwo.language}`);

// adventage to prototype : adding attribute or function on all existing object type out of the constructor declaration.
myFuncProto.prototype.language = "fr";
console.log(`${myObjProto.name} language is ${myObjProto.language}`);

