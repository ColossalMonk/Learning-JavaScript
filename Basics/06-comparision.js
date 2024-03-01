// ==========> Comparisons <==========

// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

// ==========> Boolean is the result <==========

// All comparison operators return a boolean value:

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.

console.log("2 > 1 ->");
console.log(2 > 1);  // true (correct)
console.log("2 == 1 ->");
console.log(2 == 1 ); // false (wrong)
console.log("2 != 1 ->");
console.log(2 != 1 ); // true (correct)

let assResult = 5 > 4; // assign the result of the comparison
console.log("Result ->")
console.log(assResult); // true

// ==========> String comparison <==========

// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.

console.log("Z > A ->");
console.log('Z' > 'A' ); // true
console.log("Glow > Glee");
console.log('Glow' > 'Glee'); // true
console.log("Bee > Be ->");
console.log('Bee' > 'Be'); // true

// Compare the first character of both strings.
// If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// Repeat until the end of either string.
// If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

// ==========> Comparison of different types <==========

// When comparing values of different types, JavaScript converts the values to numbers.

console.log("'2' > 1 ->");
console.log('2' > 1); // true, string '2' becomes a number 2
console.log("'01' == 1 ->");
console.log('01' == 1 ); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.

console.log("true == 1 ->");
console.log(true == 1); // true
console.log("false == 0 ->");
console.log(false == 0); // true

// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.

let numberA = 0;
console.log("numberA -> " + numberA + " type of numberA -> " + typeof(numberA))
console.log("Boolean(numberA) -> " + Boolean(numberA)); // false

let numberB = "0";
console.log("numberB -> " + numberB + " type of numberB -> " + typeof(numberB))
console.log("Boolean(numberB) -> " + Boolean(numberB)); // false

console.log("numberA == numberB -> ")
console.log(numberA == numberB); // true!

// This result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.

// ==========> Strict equality <==========

// A regular equality check == has a problem. It cannot differentiate 0 from false.

console.log("0 == false ->");
console.log(0 == false ); // true

// The same thing happens with an empty string:

console.log("'' == falase ->");
console.log('' == false ); // true

// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

// A strict equality operator === checks the equality without type conversion.

// If a and b are of different types, then a === b immediately returns false without an attempt to convert them.

console.log("0 === false ->")
console.log(0 === false ); // false, because the types are different

// There is also a “strict non-equality” operator !== analogous to !=.

// ==========> Comparison with null and undefined <==========

// There’s a non-intuitive behavior when null or undefined are compared to other values.

// For a strict equality check ===

console.log("null === undefined ->");
console.log(null === undefined); // false

// For a non-strict check ==

console.log("null == undefined ->");
console.log(null == undefined); // true

// For maths and other comparisons < > <= >=

// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

// Strange result: null vs 0

console.log("null > 0 ->");
console.log(null > 0);  // (1) false
console.log("null == 0 ->");
console.log(null == 0); // (2) false
console.log("null >= 0 ->");
console.log(null >= 0); // (3) true


// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

// An incomparable undefined

// The value undefined shouldn’t be compared to other values:

console.log("undefined > 0 ->");
console.log(undefined > 0); // false (1)
console.log("undefined < 0 ->");
console.log(undefined < 0 ); // false (2)
console.log("undefined == 0 ->");
console.log(undefined == 0 ); // false (3)

// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.

// The equality check (3) returns false because undefined only equals null, undefined, and no other value.

// Treat any comparison with undefined/null except the strict equality === with exceptional care.

// Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.