// ==========> Conditional branching: if, '?' <==========

// The “if” statement

// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

let guessDate = prompt('Guess the year? (PS: 2015 is the right answer)', '');

if (guessDate == 2015) console.log('You are right!');

if (guessDate == 2015) {
  console.log("That's correct!");
  console.log("You're so smart!");
}

// ==========> Boolean conversion <==========

// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

if (0) { // 0 is falsy
    console.log("Doing something...");
}

if (1) { // 1 is truthy
    console.log("Doing something...");
}

let cond = (guessDate == 2015); // equality evaluates to true or false

if (cond) {
    console.log("Doing something...");
}

// ==========> The “else” clause <==========

// The if statement may contain an optional else block. It executes when the condition is falsy.

guessDate = prompt('Guess the year? (PS: 2015 is the right answer)', '');

if (guessDate == 2015) {
    console.log('You guessed it right!');
} else {
    console.log('How can you be so wrong?'); // any value except 2015
}

// ==========> Several conditions: “else if” <==========

guessDate = prompt('Guess the year? (PS: 2015 is the right answer)', '');

if (guessDate < 2015) {
    console.log('Too early...');
} else if (guessDate > 2015) {
    console.log('Too late');
} else {
    console.log('Exactly!');
}

// ==========> Conditional operator ‘?’ <==========

let accessAllowed;
let inputUserAge = prompt('How old are you?', '');

if (inputUserAge > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);

// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

// The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

// The syntax is:
 
// let result = condition ? value1 : value2;
// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

accessAllowed = (age > 18) ? true : false;
console.log("is accessAllowed -> " + accessAllowed);

inputUserAge = prompt('age?', 18);

let compareAge = (inputUserAge < 3) ? 'Hi, baby!' :
  (inputUserAge < 18) ? 'Hello!' :
  (inputUserAge < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log(compareAge);

// The first question mark checks whether age < 3.
// If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age < 18.
// If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.
// If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'.
// Here’s how this looks using if..else:

if (inputAge < 3) {
  compareAge = 'Hi, baby!';
} else if (inputAge < 18) {
  compareAge = 'Hello!';
} else if (inputAge < 100) {
  compareAge = 'Greetings!';
} else {
  compareAge = 'What an unusual age!';
}