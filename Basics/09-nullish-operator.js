// ==========> Nullish coalescing operator '??' <==========

// This is a recent addition to the language. Old browsers may need polyfills.

// The nullish coalescing operator is written as two question marks ??.

//The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.
// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

result = (a !== null && a !== undefined) ? a : b;

let testUser;
console.log(testUser ?? "Anonymous"); // Anonymous (user is undefined)


testUser = "John";
console.log(user ?? "Anonymous"); // John (user is not null/undefined)

let testFirstName = null;
let testLastName = null;
let testNickName = "Supercoder";

// shows the first defined value:
alert(testFirstName ?? testLastName ?? testNickName ?? "Anonymous"); // Supercoder

// ==========> Comparison with || <==========

testFirstName = null;
testLastName = null;
testNickName = "Supercoder";

// shows the first truthy value:
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

// The important difference between them is that:

// || returns the first truthy value.
// ?? returns the first defined value.

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

// The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
// so the result of || is the second argument, 100.
// The height ?? 100 checks height for being null/undefined, and it’s not,
// so the result is height “as is”, that is 0.

let roomHeight = null;
let roomWidth = null;

// important: use parentheses
let roomArea = (roomHeight ?? 100) * (roomWidth ?? 50);
console.log(roomArea); // 5000

// without parentheses
roomArea = height ?? 100 * width ?? 50;
console.log(roomArea);
