
//node Example/Example03Func.js

let a = 5;
let b = 7;

// example of function basic.
function myFuncAdd(a, b){
	return a + b;
}
console.log(`${a} + ${b} = ${myFuncAdd(a, b)}`);

// example function lambda/ arrow.
let myLambda = (a, b) => a + b;
console.log(`${a} + ${b} = ${myLambda(a, b)}`);

// example of async function.
async function myFuncAsync(msg, wait){
	await new Promise(() => {
		setTimeout(() => {}, wait);
	});
	console.log(msg);
}
myFuncAsync("first launch async 1000", 1000); // suposed to be called in async.
myFuncAsync("second launch async 500", 500);

// self invoking function (a function call when declarated).
(function(){
	console.log("self invoking");
})();