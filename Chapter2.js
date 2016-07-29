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

// ----- Value types (not variable types) ----- //