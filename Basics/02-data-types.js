// There are eight basic data types in JavaScript.

// Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

// ==========> Number <==========

// The number type represents both integer and floating point numbers.
let n = 123;
console.log(n);

n = 12.345;
console.log(n);

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

// We can get it as a result of division by zero:

console.log("1 / 0 -> " + 1 / 0 ); // Infinity

//Or just reference it directly:

console.log( Infinity ); // Infinity

//NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

console.log( "not a number" / 2 ); // NaN, such division is erroneous

//NaN is sticky. Any further mathematical operation on NaN returns NaN:

console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); // NaN

//So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

// =========> BigInt <==========

// In JavaScript, the “number” type cannot safely represent integer values larger than (2^53-1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.

// To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10^308), but outside of the safe integer range ±(2^53-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

// For example, these two numbers (right above the safe range) are the same:

console.log("9007199254740991 + 1 -> " + 9007199254740991 + 1); // 9007199254740992
console.log("9007199254740991 + 2 -> " + 9007199254740991 + 2); // 9007199254740992

// So to say, all odd integers greater than (2^53-1) can’t be stored at all in the “number” type.

// For most purposes ±(2^53-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.

// BigInt type was recently added to the language to represent integers of arbitrary length.

// A BigInt value is created by appending n to the end of an integer.

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// ==========> String <==========

// A string in JavaScript must be surrounded by quotes.

let str1 = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another string like. str1 -> ${str1}`;
console.log(str1);
console.log(str2);
console.log(phrase);
// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

let user = "John";

// embed a variable
console.log( `Hello, ${user}!` ); // Hello, John!

// embed an expression
console.log( `the result is ${1 + 2}` ); // the result is 3
// The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.

// Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!

console.log( "the result is ${1 + 2}, double quotes do nothing" ); // the result is ${1 + 2} (double quotes do nothing)

// ==========> Boolean <=========

// The boolean type has only two values: true and false.

/// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
console.log("Name field is checked: " + nameFieldChecked);
console.log("Age field is checked: " + ageFieldChecked);

// Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;

console.log( isGreater ); // true (the comparison result is "yes")

// ==========> Null and Undefined <==========

// The special null value does not belong to any of the types described above.

// It forms a separate type of its own which contains only the null value

let randomAge = null;
console.log("Random Age: " + randomAge);
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.

// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// If a variable is declared, but not assigned, then its value is undefined

let undefinedAge;

console.log("Undefined Age: " + undefinedAge); // shows "undefined"
//Technically, it is possible to explicitly assign undefined to a variable:

let userAge = 100;
console.log("Use Age: " + age); // 100

// change the value to undefined
userAge = undefined;

console.log("User Age: " + age); // "undefined"

// ==========> Objects and Symbols <==========

// The object type is special.

// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

// The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

// ==========> typeof operators <=========

// The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

// A call to typeof x returns a string with the type name

console.log("Undefined: " + typeof undefined); // "undefined"

console.log("0: " + typeof 0); // "number"

console.log("10n: " + typeof 10n); // "bigint"

console.log("true: " + typeof true); // "boolean"

console.log("foo: " + typeof "foo"); // "string"

console.log("Symbol(id): " + typeof Symbol("id")); // "symbol"

console.log("Math: " + typeof Math); // "object"  (1)

console.log("Null: " + typeof null); // "object"  (2)

console.log("Alert: "+ typeof alert); // "function"  (3)