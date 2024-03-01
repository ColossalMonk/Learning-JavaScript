// ==========> Terms: Unary, Binary, Operand <==========

// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let x = 1;

x = -x;
console.log( x ); // -1, unary negation was applied

//An operator is binary if it has two operands. The same minus exists in binary form as well:

let y = 3;
console.log( y - x ); // 3 - -1 = 4, binary minus subtracts values

// ==========> Maths <==========

// The following math operations are supported:

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// The first four are straightforward, while % and ** need a few words about them.

// ==========> Remainder % <==========

// The remainder operator %, despite its appearance, is not related to percents.

// The result of a % b is the remainder of the integer division of a by b.

console.log("5 % 2 -> " + 5 % 2 ); // 1, the remainder of 5 divided by 2
console.log("8 % 3 -> " + 8 % 3 ); // 2, the remainder of 8 divided by 3
console.log("8 $ 4 -> " + 8 % 4 ); // 0, the remainder of 8 divided by 4

// ==========> Exponentiation ** <==========

// The exponentiation operator a ** b raises a to the power of b.

console.log("2 ^ 2 -> " + 2 ** 2 ); // 2² = 4
console.log("2 ^ 3 -> " + 2 ** 3 ); // 2³ = 8
console.log("2 ^ 4 -> " + 2 ** 4 ); // 2⁴ = 16

// Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

// A square root is an exponentiation by ½:

console.log("4 ^ (1/2) -> " + 4 ** (1/2)); // 2 (power of 1/2 is the same as a square root)
console.log("8 ^ (1/3) -> " + 8 ** (1/3)); // 2 (power of 1/3 is the same as a cubic root)

// String concatenation with binary +

// Usually, the plus operator + sums numbers.

// But, if the binary + is applied to strings, it merges (concatenates) them:

let s = "my" + "string";
console.log(s); // mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.

console.log('1' + 2); // "12"
console.log(2 + '1'); // "21"

// It doesn’t matter whether the first operand is a string or the second one.

console.log(2 + 2 + '1'); // "41" and not "221"

// Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

console.log('1' + 2 + 2); // "122" and not "14"
// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

console.log(6 - '2'); // 4, converts '2' to a number
console.log('6' / '2'); // 3, converts both operands to numbers

// Numeric conversion, unary +

// The plus + exists in two forms: the binary form that we used above and the unary form.

// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// No effect on numbers
let x1 = 1;
console.log(+x1); // 1

let y1 = -2;
console.log(+y); // -2

// Converts non-numbers
alert(+true); // 1
alert(+"");   // 0

// The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

// The binary plus would add them as strings:

let apples = "2";
let oranges = "3";

console.log( apples + oranges ); // "23", the binary plus concatenates strings

// If we want to treat them as numbers, we need to convert and then sum them:

apples = "2";
oranges = "3";

// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

// the longer variant
console.log( Number(apples) + Number(oranges) ); // 5

// ==========> Assignment <==========

// Assignment = is also an operator

// When we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

let ass = 2 * 2 + 1;
console.log(ass); // 5

// Assignment = returns a value

//The fact of = being an operator, not a “magical” language construct has an interesting implication.

// All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

// The call x = value writes the value into x and then returns it.

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log("a -> " + a); // 3
console.log("b -> " + b);
console.log("c -> " + c); // 0

// The result of expression (a = b + 1) is the value which was assigned to a (that is 3). It is then used for further evaluations.

// Chaining assignments

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

console.log("num1 -> " + num1); // 4
console.log("num2 -> " + num2); // 4
console.log("num3 -> " + num3); // 4

// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

num3 = 2 + 2;
num2 = num3;
num1 = num3;

// Modify-in-place

let n1 = 2;
console.log("n1 -> " + n1);
n1 = n1 + 5;
console.log("n1 = n1 + 5 -> " + n1);
n1 = n1 * 2;
console.log("n1 = n1 * 2 -> " + n1);

// This notation can be shortened using the operators += and *=:

n1 = 2;
n1 += 5; // now n = 7 (same as n = n + 5)
n1 *= 2; // now n = 14 (same as n = n * 2)
/*
Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:

let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16
Increment/decrement
Increasing or decreasing a number by one is among the most common numerical operations.

So, there are special operators for it:

Increment ++ increases a variable by 1:

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3
Decrement -- decreases a variable by 1:

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1
Important:
Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

The operators ++ and -- can be placed either before or after a variable.

When the operator goes after the variable, it is in “postfix form”: counter++.
The “prefix form” is when the operator goes before the variable: ++counter.
Both of these statements do the same thing: increase counter by 1.

Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

To see the difference, here’s an example:

let counter = 1;
let a = ++counter; // (*)

alert(a); // 2
In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.

Now, let’s use the postfix form:

let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1
In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.

To summarize:

If the result of increment/decrement is not used, there is no difference in which form to use:

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same
If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

let counter = 0;
alert( ++counter ); // 1
If we’d like to increment a value but use its previous value, we need the postfix form:

let counter = 0;
alert( counter++ ); // 0
Increment/decrement among other operators
The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

For instance:

let counter = 1;
alert( 2 * ++counter ); // 4
Compare with:

let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value
Though technically okay, such notation usually makes code less readable. One line does multiple things – not good.

While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.

We advise a style of “one line – one action”:

let counter = 1;
alert( 2 * counter );
counter++;
Bitwise operators
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises.

Comma
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

For example:

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

Comma has a very low precedence
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

Why do we need an operator that throws away everything except the last expression?

Sometimes, people use it in more complex constructs to put several actions in one line.

For example:

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.
*/