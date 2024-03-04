// ==========> Logical operators <==========

// There are four logical operators in JavaScript:
// || (OR)
// && (AND)
// ! (NOT)
// ?? (Nullish Coalescing).

// ==========> || (OR) <==========

// The “OR” operator is represented with two vertical line symbols:

// result = a || b;

console.log("true || true ->");
console.log(true || true);   // true
console.log("false || true ->");
console.log(false || true);  // true
console.log("true || false ->");
console.log(true || false);  // true
console.log("false || false ->");
alert( false || false); // false

if (1 || 0) { // works just like if( true || false )
  console.log('truthy!, 1 || 0');
}

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log('The office is closed.');
}

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log('The office is closed.'); // it is the weekend
}

// result = value1 || value2 || value3;

// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
// A value is returned in its original form, without the conversion.

// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

console.log( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// If all variables were falsy, "Anonymous" would show up.

console.log(true || "not printed");
console.log(false || "printed");

// =========> && (AND) <==========

// The AND operator is represented with two ampersands &&

// Syntax:
// result = a && b;

// AND returns true if both operands are truthy and false otherwise:

console.log("true && true ->");
console.log(true && true);   // true
console.log("true && false ->");
console.log(true && false);  // false
console.log("false && true ->");
console.log(false && true);  // false
console.log("false && false ->");
console.log(false && false); // false

hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log('The time is 12:30');
}

if (1 && 0) { // evaluated as true && false
  console.log( "won't work, because the result is falsy" );
}

// AND “&&” finds the first falsy value

// result = value1 && value2 && value3;

//The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// In other words, AND returns the first falsy value or the last value if none were found.

// The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0

// We can also pass several values in a row.
console.log( 1 && 2 && null && 3 ); // null

// When all values are truthy, the last value is returned:
console.log( 1 && 2 && 3 ); // 3, the last one

// The code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

// ==========> ! (NOT) <==========

// The boolean NOT operator is represented with an exclamation sign !.

// Syntax
// result = !value;

console.log("!true ->"); // false
console.log(!true); // false
console.log("!0 ->"); // true
console.log(!0); // true

// The operator accepts a single argument and does the following:

// Converts the operand to boolean type: true/false.

// Returns the inverse value.

//A double NOT !! is sometimes used for converting a value to boolean type:

console.log(!!"non-empty string"); // true
console.log(!!null); // false

// Another way to convert to boolean type

console.log(Boolean("non-empty string")); // true
console.log(Boolean(null)); // false