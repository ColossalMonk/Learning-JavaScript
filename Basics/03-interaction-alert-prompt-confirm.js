// ========> alert <=========

// It shows a message and waits for the user to press “OK”.

// The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

alert("Hello");

// ==========> prompt <==========

// The function prompt accepts two arguments.

// Syntax:
// result = prompt(title, [default]);

// It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

// title
// The text to show the visitor.

// default
// An optional second parameter, the initial value for the input field.

let result = prompt("Hello", "HelloWorld!");

let inputAge = prompt('How old are you?', 100);

alert(`You are ${inputAge} years old!`); // You are 100 years old!
console.log(`You are ${inputAge} years old!`); // You are 100 years old!

// ==========> Confirm <==========

// The syntax:
// result = confirm(question);

// The function confirm shows a modal window with a question and two buttons: OK and Cancel.

// The result is true if OK is pressed and false otherwise.

let isBoss = confirm("Are you the boss?");

alert( `is Boss ${isBoss}` ); // true if OK is pressed
console.log( `is Boss ${isBoss}` ); // true if OK is pressed

let inputUsername = prompt("Enter your username", "Please enter your name");
alert(`Selected username: ${inputUsername}`);
console.log(`Selected username: ${inputUsername}`);