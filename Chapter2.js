/**
 * Created by bld_aalarcon on 29/07/16.
 */

// ----- Value types (not variable types) ----- //
//JavaScript has typed values, not typed variables. The following built-in types are available:
/* string
 * number
 * boolean
 * null and undefined
 * object
 * symbol (new to ES6)
 */
var a; //undefined
typeof a; //"undefined"

a = 'hello world'; //"hello world"
typeof a; //"string"

a = 42; //42
typeof a; //"number"

a = true; //true
typeof a; //"boolean"

a = null; //null
typeof a; //"object"

a = undefined; //undefined
typeof a; //"undefined"

//Objects
a = {b:"c"}; //Object {b: "c"}
typeof a; //"object"

var obj = {
    a: "hello world",
    b: 42,
    c: true
}; //undefined
obj.a; //"hello world"
obj.b; //42
obj.c; //true
obj["a"]; //"hello world"
obj["b"]; //42
obj["c"]; //true
var d = "a";
obj[d]; //"hello world"

//Arrays
var arr = ["hello world", 42, true]; //undefined
arr[0]; //"hello world"
arr[1]; //42
arr[2]; //true
arr.length; //3
typeof arr; //"object"

function foo() {
    return 42;
}; //undefined
foo.bar = "hello world"; //"hello world"
typeof foo; //"function"
typeof foo(); //"number"
typeof foo.bar; //"string"


//Boxing example: it converts the primitive string into a String object
var a = "hello world";
a.toUpperCase(); // "HELLO WORLD"


//truthy - automatic coercion of a value to true
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date());

//falsy - automatic coercion of a value to false
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (document.all) [1];

var a = "42"; //undefined
var b = 42; //undefined
a == b; // true
a === b; // false


var a = [1,2,3]; //undefined
var b = [1,2,3]; //undefined
var c = "1,2,3"; //undefined
a == c; //true
b == c; //true
a == b; //false

var a = 41; //undefined
var b = "42"; //undefined
var c = "43"; //undefined
a < b; // true //number comparison
b < c; // true //dictionarilly comparison

var a = 42; //undefined
var b = "foo"; //undefined
a < b; // false //b is converted to NaN, then return false
a > b; // false //b is converted to NaN, then return false
a == b; // false

// ----- Value types (not variable types) ----- //


// ----- Variables ----- //
//---
var a = 2;
foo();

function foo() {
    a = 3;
    console.log( a ); // 3
    var a;
}
console.log( a ); // 2
//---

//---
function foo() {
    var a = 1;
    if (a >= 1) {
        let b = 2;
        while (b < 5) {
            let c = b * 2;
            b++;
            console.log( a + c );
        }
        //the c var (let) is not accessible here
    }
    //the b var (let) is not accessible here
}
foo(); // 5 7 9
//---
// ----- Variables ----- //


// ----- Conditionals ----- //
var a = 42;
var b = (a > 41) ? "hello" : "world";
console.log(b); //hello
// ----- Conditionals ----- //


// ----- Strict mode ----- //
function noStrict() {
    noStrictVar = 1;
    return noStrictVar;
} //undefined
noStrict(); // 1

function strict() {
    "use strict"; // turn on strict mode
    //strictVar = 1; // `var` missing, ReferenceError
    return strictVar;
} //undefined
strict(); // Uncaught ReferenceError
// ----- Strict mode ----- //



// ----- Functions as Values ----- //
var foo = function() {
    console.log('im here');
}; // undefined
foo(); //im here

var x = function bar(){
    console.log('im here too');
}; // undefined
x(); // im here too
bar(); // Uncaught ReferenceError

//IIFE - Immediately invoked function expression
(function IIFE(){
    console.log( "Hello!" );
})(); //Hello!

//Closure
function makeAdder(x) {
    function add(y) {
        return y + x;
    };
    return add;
} // undefined
var plusOne = makeAdder( 1 ); // undefined
plusOne(3); // 4
var plusTen = makeAdder( 10 ); // undefined
plusTen(13); // 23

//Modules pattern
function User(){
    var username, password;
    function doLogin(user,pw) {
        username = user;
        password = pw;
        console.log('Logging in the user: ' + user + ' with password: ' + password);
    }
    var publicAPI = {
        login: doLogin
    };
    return publicAPI;
} // undefined
var fred = User(); // undefined
fred.login( "fred", "12Battery34!" ); // Logging in the user: fred with password: 12Battery34!
// ----- Functions as Values ----- //


// ----- this Identifier ----- //
//this always refer to an object! The global scope object or the the outer scope object, like below:
function foo() {
    console.log( this.bar );
}
var bar = "global";
var obj1 = {
    bar: "obj1",
    foo: foo
};
var obj2 = {
    bar: "obj2"
}; // undefined

foo(); // global
obj1.foo(); // obj1
foo.call(obj2); //obj2
new foo(); // undefined
// ----- this Identifier ----- //


// ----- Prototypes ----- //
// It's like inheritance. When I create an object, it creates a prototype on it.
// When I create the object with foo, it creates an object that inherits the foo object (it inherits with a prototype).
var foo = {
    a: 42
}; // undefined
var bar = Object.create(foo); // undefined
bar; // Object {}
//        __proto__: Object
//          a: 42
//          __proto__: Object
bar.b = 'Hello World!'; // "Hello World!"
bar.b; // "Hello World!"
bar.a; // 42
// ----- Prototypes ----- //


// ----- Old & New ----- //
// Polyfilling - a piece of code that simulates the new JS features (like functions) to run in older JS environments.
// Not all the new features can be simulated by polyfilling. Example:
if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
        return x !== x;
    };
}
// Polyfillers: https://github.com/es-shims/es5-shim    https://github.com/es-shims/es6-shim

// Transpilling - a tool that converts your newer code into older code equivalents.
// On the build process we insert the transpiler, like the minifying. It's always better to write code with the
// new syntax. The code gets more human readable. Example:
// In ES6:
function foo(a = 2) {
    console.log( a );
} // undefined
foo(); // 2
foo( 42 ); // 42
// Tranpilled becomes in:
function foo() {
    var a = arguments[0] !== (void 0) ? arguments[0] : 2;
    console.log( a );
} // undefined
foo(); // 2
foo( 42 ); // 42

//Transpillers: https://babeljs.io/     https://github.com/google/traceur-compiler

// ----- Old & New ----- //


// ----- Non-JavaScript ----- //
// I've only learned about the JS language. But on the real world, I'll use many things that are not on the JS.
// Like the below example:
var el = document.getElementByID( "foo" );
// The document object is provided by the browser and is not specificated on the JS language. It's just a interface
// that is implemented by each browser. The same happens with the alert function, that simulates windows.alert().
// ----- Non-JavaScript ----- //