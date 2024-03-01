// A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

// To create a variable in JavaScript, use the let keyword.

let message;
messsage = 'Hello World!'; // store the string 'Hello World!' in the variable named message

console.log(message); // shows the variable content in console

// define the variables and assign values to them
let firstUserName = 'John';
let lastUserName = 'Snow';
let age = 25;

console.log("First Name: " + firstUserName + ", Last Name: " + lastUserName + ", Age: " + age);

// We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.

// For instance, the variable message can be imagined as a box labelled "message" with the value "Hello!" in it.

// We can put any value in the box.

// We can also change it as many times as we want.

let messageBox;

messageBox = "Hello!";
console.log(messageBox);

messageBox = "World!"; // value changed
console.log(messageBox);

// When the value is changed, the old data is removed from the variable.

// We can also declare two variables and copy data from one into the other.

let hello = "Hello World!";
let world;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
console.log(hello); // Hello world!
console.log(message); // Hello world!

// To declare a constant (unchanging) variable, use const instead of let
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00

// Benefits:

// COLOR_ORANGE is much easier to remember than "#FF7F00".
// It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
// When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.

// We can declare variables to store data by using the var, let, or const keywords.

// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all.
// const – is like let, but the value of the variable can’t be changed.