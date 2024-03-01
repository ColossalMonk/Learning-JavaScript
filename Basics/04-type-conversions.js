// Most of the time, operators and functions automatically convert the values given to them to the right type.

// ==========> String Conversion <==========

// String conversion happens when we need the string form of a value.

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

// ==========> Number Conversion <==========

// Numeric conversion in mathematical functions and expressions happens automatically.

console.log( "6" / "2" ); // 3, strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:

let strValue = "123";
console.log(typeof strValue); // string

let numValue = Number(strValue); // becomes a number 123
console.log(typeof numValue); // number

// Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

// If the string is not a valid number, the result of such a conversion is NaN

let convertingAge = Number("an arbitrary string instead of a number");

console.log(convertingAge); // NaN, conversion failed

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

// Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.

// ==========> Boolean Conversion <==========

// Boolean conversion is the simplest one.

// It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

// The conversion rule:

// 1. Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// 2. Other values become true.

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log( Boolean("0") ); // true