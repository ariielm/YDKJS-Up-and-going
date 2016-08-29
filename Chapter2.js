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
//this always refer to an object!
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