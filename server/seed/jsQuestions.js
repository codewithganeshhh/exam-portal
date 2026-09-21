export const jsQuestions = [
  {
    questionNumber: 1,
    questionText: "Which keyword is used to declare a variable whose value CANNOT be reassigned after declaration in JavaScript?",
    options: ["var", "let", "const", "static"],
    correctOption: 2,
    explanation: "'const' creates a block-scoped variable that cannot be reassigned once initialized."
  },
  {
    questionNumber: 2,
    questionText: "What is the key difference between 'let' and 'var' in JavaScript?",
    options: [
      "'var' is block-scoped; 'let' is function-scoped",
      "'let' is block-scoped ({}); 'var' is function-scoped and does not respect block boundaries",
      "'var' cannot be reassigned",
      "There is no difference"
    ],
    correctOption: 1,
    explanation: "'let' is confined to the block {} in which it is defined, preventing variable leakage, whereas 'var' is function-scoped."
  },
  {
    questionNumber: 3,
    questionText: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "== checks both value and type; === checks only value",
      "== performs automatic type conversion before comparing; === requires both value and data type to be identical without conversion",
      "=== is only used for strings",
      "== is an assignment operator; === is a comparison operator"
    ],
    correctOption: 1,
    explanation: "Strict equality (===) checks value and type (e.g. 5 === '5' is false); loose equality (==) coerces types (5 == '5' is true)."
  },
  {
    questionNumber: 4,
    questionText: "What will `console.log(typeof 42)` print?",
    options: ["'integer'", "'number'", "'float'", "'digit'"],
    correctOption: 1,
    explanation: "In JavaScript, all numerical values (integers and decimals) belong to the 'number' type."
  },
  {
    questionNumber: 5,
    questionText: "What will `console.log(typeof 'Hello')` print?",
    options: ["'text'", "'char'", "'string'", "'str'"],
    correctOption: 2,
    explanation: "Text wrapped in quotes is of the 'string' data type."
  },
  {
    questionNumber: 6,
    questionText: "What is the index of the first element in a JavaScript array?",
    options: ["0", "1", "-1", "null"],
    correctOption: 0,
    explanation: "JavaScript arrays are zero-indexed, meaning the first element is accessed at index 0."
  },
  {
    questionNumber: 7,
    questionText: "Which array method adds one or more elements to the END of an array?",
    options: [".pop()", ".push()", ".shift()", ".unshift()"],
    correctOption: 1,
    explanation: ".push() appends elements to the end of an array and returns the new length."
  },
  {
    questionNumber: 8,
    questionText: "Which array method removes the LAST element from an array?",
    options: [".pop()", ".push()", ".shift()", ".slice()"],
    correctOption: 0,
    explanation: ".pop() removes and returns the last element of an array."
  },
  {
    questionNumber: 9,
    questionText: "Which array method removes the FIRST element from an array?",
    options: [".shift()", ".unshift()", ".pop()", ".splice()"],
    correctOption: 0,
    explanation: ".shift() removes the first element from index 0 and shifts remaining elements down."
  },
  {
    questionNumber: 10,
    questionText: "Which array method adds one or more elements to the START (index 0) of an array?",
    options: [".push()", ".unshift()", ".prepend()", ".insert()"],
    correctOption: 1,
    explanation: ".unshift() inserts elements at the beginning of an array."
  },
  {
    questionNumber: 11,
    questionText: "What is the output of `console.log('5' + 3)` in JavaScript?",
    options: ["8", "'53'", "NaN", "TypeError"],
    correctOption: 1,
    explanation: "When the + operator is used with a string and a number, the number is converted to a string and concatenated, resulting in '53'."
  },
  {
    questionNumber: 12,
    questionText: "What is the output of `console.log('5' - 3)` in JavaScript?",
    options: ["2", "'53'", "NaN", "undefined"],
    correctOption: 0,
    explanation: "The - operator coerces strings to numbers, performing arithmetic subtraction (5 - 3 = 2)."
  },
  {
    questionNumber: 13,
    questionText: "Which built-in method selects an HTML element by its 'id' attribute?",
    options: [
      "document.selectId('myId')",
      "document.getElementById('myId')",
      "document.findId('myId')",
      "document.queryId('myId')"
    ],
    correctOption: 1,
    explanation: "document.getElementById('myId') returns a direct reference to the element with that ID."
  },
  {
    questionNumber: 14,
    questionText: "Which modern DOM method selects the first element matching any CSS selector (e.g. '.card button')?",
    options: [
      "document.getElementBySelector()",
      "document.querySelector()",
      "document.findCSS()",
      "document.search()"
    ],
    correctOption: 1,
    explanation: "document.querySelector('selector') returns the first matching element using standard CSS selector syntax."
  },
  {
    questionNumber: 15,
    questionText: "How do you attach a click event listener to a button element 'btn'?",
    options: [
      "btn.onclickListener('click', fn)",
      "btn.addEventListener('click', fn)",
      "btn.attach('click', fn)",
      "btn.listen('click', fn)"
    ],
    correctOption: 1,
    explanation: "btn.addEventListener('click', fn) is the standard method for registering event handlers in JavaScript."
  },
  {
    questionNumber: 16,
    questionText: "What does 'event.preventDefault()' do when called inside a form submit event handler?",
    options: [
      "Clears all input values",
      "Prevents the default browser action of reloading or navigating the page on form submit",
      "Closes the browser tab",
      "Throws an error alert"
    ],
    correctOption: 1,
    explanation: "event.preventDefault() stops the browser's default behavior, allowing SPA apps to process form data with JavaScript without page reload."
  },
  {
    questionNumber: 17,
    questionText: "What is the difference between 'null' and 'undefined' in JavaScript?",
    options: [
      "They are exactly identical",
      "'undefined' means a variable has been declared but not assigned a value; 'null' is an intentional assignment representing no value or an empty object",
      "'null' means a variable is undefined; 'undefined' is an object",
      "'null' is a number"
    ],
    correctOption: 1,
    explanation: "undefined is the default value of uninitialized variables; null is an intentional assigned value representing 'empty'."
  },
  {
    questionNumber: 18,
    questionText: "How do you write a modern Arrow Function that takes 'x' and returns 'x * 2'?",
    options: [
      "const double = x => x * 2;",
      "const double = function(x) => x * 2;",
      "const double = (x) -> x * 2;",
      "function double(x) -> return x * 2;"
    ],
    correctOption: 0,
    explanation: "Arrow functions use the '=>' syntax with implicit return when written in a single-line body: x => x * 2."
  },
  {
    questionNumber: 19,
    questionText: "How do you check the total number of items in an array 'fruits'?",
    options: ["fruits.size()", "fruits.length", "fruits.count", "fruits.total"],
    correctOption: 1,
    explanation: "The '.length' property returns the number of elements in an array or the number of characters in a string."
  },
  {
    questionNumber: 20,
    questionText: "Which method converts a JavaScript object into a JSON string format?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.serialize()"],
    correctOption: 1,
    explanation: "JSON.stringify(obj) converts a JavaScript object/array into a valid JSON string."
  },
  {
    questionNumber: 21,
    questionText: "Which method parses a JSON string back into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.decode()"],
    correctOption: 1,
    explanation: "JSON.parse(str) deserializes a JSON string into a native JavaScript object or array."
  },
  {
    questionNumber: 22,
    questionText: "Which method executes a function once after a specified delay in milliseconds?",
    options: ["setInterval()", "setTimeout()", "delay()", "sleep()"],
    correctOption: 1,
    explanation: "setTimeout(callback, delayInMs) executes a function once after the specified time."
  },
  {
    questionNumber: 23,
    questionText: "Which method executes a function repeatedly at regular intervals of time?",
    options: ["setTimeout()", "setInterval()", "repeat()", "loop()"],
    correctOption: 1,
    explanation: "setInterval(callback, intervalInMs) runs repeatedly until stopped using clearInterval()."
  },
  {
    questionNumber: 24,
    questionText: "How do you save a key-value item into the browser's persistent localStorage?",
    options: [
      "localStorage.put('username', 'Rahul')",
      "localStorage.setItem('username', 'Rahul')",
      "localStorage.store('username', 'Rahul')",
      "localStorage.save('username', 'Rahul')"
    ],
    correctOption: 1,
    explanation: "localStorage.setItem(key, value) saves a string value associated with a key."
  },
  {
    questionNumber: 25,
    questionText: "How do you retrieve an item stored in localStorage?",
    options: [
      "localStorage.getItem('username')",
      "localStorage.read('username')",
      "localStorage.fetch('username')",
      "localStorage.get('username')"
    ],
    correctOption: 0,
    explanation: "localStorage.getItem(key) returns the stored string value, or null if the key doesn't exist."
  },
  {
    questionNumber: 26,
    questionText: "Which array method creates a NEW array populated with the results of calling a function on every element in the calling array?",
    options: [".forEach()", ".map()", ".filter()", ".find()"],
    correctOption: 1,
    explanation: ".map() returns a new array with transformed elements without mutating the original array."
  },
  {
    questionNumber: 27,
    questionText: "Which array method creates a NEW array containing only the elements that satisfy a condition (return true)?",
    options: [".filter()", ".map()", ".reduce()", ".slice()"],
    correctOption: 0,
    explanation: ".filter() tests each element against a callback function and returns a new array of matching elements."
  },
  {
    questionNumber: 28,
    questionText: "Which array method returns the FIRST element that satisfies a test condition, or undefined if not found?",
    options: [".filter()", ".find()", ".search()", ".first()"],
    correctOption: 1,
    explanation: ".find() stops at and returns the very first item that matches the callback condition."
  },
  {
    questionNumber: 29,
    questionText: "Which array method checks whether an array includes a certain value and returns true or false?",
    options: [".has()", ".contains()", ".includes()", ".exists()"],
    correctOption: 2,
    explanation: ".includes(value) returns a boolean indicating whether the specified value is present."
  },
  {
    questionNumber: 30,
    questionText: "What does the 'typeof' operator return for an array (e.g. `typeof [1, 2, 3]`)?",
    options: ["'array'", "'object'", "'list'", "'collection'"],
    correctOption: 1,
    explanation: "In JavaScript, arrays are objects, so typeof [] returns 'object'. Use Array.isArray(arr) to specifically check for arrays."
  },
  {
    questionNumber: 31,
    questionText: "How do you correctly check if a variable 'arr' is an actual Array in JavaScript?",
    options: [
      "typeof arr === 'array'",
      "Array.isArray(arr)",
      "arr.type === 'array'",
      "arr instanceof List"
    ],
    correctOption: 1,
    explanation: "Array.isArray(arr) is the standard, reliable method to verify if a value is an Array."
  },
  {
    questionNumber: 32,
    questionText: "What is the purpose of Template Literals (enclosed in backticks ``)?",
    options: [
      "To create regular expressions",
      "To allow multi-line strings and embed expressions using ${variable} syntax (string interpolation)",
      "To compile JavaScript to WebAssembly",
      "To encrypt passwords"
    ],
    correctOption: 1,
    explanation: "Template literals allow embedded expressions (`Hello ${name}`) and multi-line strings without escape characters."
  },
  {
    questionNumber: 33,
    questionText: "What will `console.log(Boolean(0))` and `console.log(Boolean(''))` output?",
    options: ["true and true", "false and false", "true and false", "false and true"],
    correctOption: 1,
    explanation: "In JavaScript, 0, empty string '', null, undefined, NaN, and false are all 'falsy' values."
  },
  {
    questionNumber: 34,
    questionText: "What does the Ternary Operator '? :' do?",
    options: [
      "Acts as a shorthand replacement for an if...else statement (condition ? ifTrue : ifFalse)",
      "Divides two numbers",
      "Creates a new database table",
      "Throws an uncaught exception"
    ],
    correctOption: 0,
    explanation: "The ternary operator evaluates a condition and returns the first expression if true, and the second if false."
  },
  {
    questionNumber: 35,
    questionText: "What does the Spread Operator ('...') do when copying an array `const copy = [...items]`?",
    options: [
      "Splits the array in half",
      "Expands the elements of 'items' into the new array, creating a shallow copy",
      "Reverses the array items",
      "Sorts the array alphabetically"
    ],
    correctOption: 1,
    explanation: "The spread operator (...) spreads elements of an iterable into a new array or object."
  },
  {
    questionNumber: 36,
    questionText: "What is Object Destructuring in JavaScript?",
    options: [
      "Deleting an object from computer memory",
      "A convenient syntax to extract properties from an object into distinct variables (e.g. const { name, age } = user;)",
      "Encrypting object keys",
      "Sorting object keys"
    ],
    correctOption: 1,
    explanation: "Destructuring unpacks values from arrays or properties from objects into distinct variables."
  },
  {
    questionNumber: 37,
    questionText: "Which string method removes whitespace from both the beginning and end of a string?",
    options: [".strip()", ".clean()", ".trim()", ".removeSpaces()"],
    correctOption: 2,
    explanation: ".trim() removes whitespace from both ends of a string without modifying the original string."
  },
  {
    questionNumber: 38,
    questionText: "Which string method splits a string into an array of substrings based on a separator (e.g. 'a,b,c'.split(','))?",
    options: [".divide()", ".split()", ".toArray()", ".slice()"],
    correctOption: 1,
    explanation: ".split(separator) divides a string into an ordered list of substrings and returns them in an array."
  },
  {
    questionNumber: 39,
    questionText: "Which array method combines all elements of an array into a single string separated by a specified delimiter?",
    options: [".concat()", ".join()", ".combine()", ".merge()"],
    correctOption: 1,
    explanation: ".join(', ') joins all elements of an array into a string separated by the specified separator."
  },
  {
    questionNumber: 40,
    questionText: "What is the purpose of the 'break' statement inside a loop?",
    options: [
      "Skips only the current iteration and goes to the next",
      "Terminates the loop entirely and continues execution after the loop",
      "Restarts the loop from the beginning",
      "Pauses execution for 1 second"
    ],
    correctOption: 1,
    explanation: "'break' exits the loop immediately, stopping all further iterations."
  },
  {
    questionNumber: 41,
    questionText: "What is the purpose of the 'continue' statement inside a loop?",
    options: [
      "Stops the loop completely",
      "Skips the remaining code in the current iteration and jumps directly to the next iteration",
      "Returns a value from the loop",
      "Prints a log message"
    ],
    correctOption: 1,
    explanation: "'continue' terminates execution of statements in the current iteration of the current loop, and continues to the next."
  },
  {
    questionNumber: 42,
    questionText: "What does `Math.floor(4.9)` return?",
    options: ["5", "4", "4.5", "NaN"],
    correctOption: 1,
    explanation: "Math.floor() rounds a number DOWN to the nearest integer, so Math.floor(4.9) returns 4."
  },
  {
    questionNumber: 43,
    questionText: "What does `Math.round(4.5)` return?",
    options: ["4", "5", "4.5", "0"],
    correctOption: 1,
    explanation: "Math.round() rounds to the nearest integer; values of .5 and higher round up to 5."
  },
  {
    questionNumber: 44,
    questionText: "How do you generate a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive) in JavaScript?",
    options: ["Math.random()", "Random.get()", "Math.rand()", "crypto.num()"],
    correctOption: 0,
    explanation: "Math.random() returns a pseudo-random number in the range [0, 1)."
  },
  {
    questionNumber: 45,
    questionText: "What are Promises used for in JavaScript?",
    options: [
      "To lock variables so they cannot be edited",
      "To handle asynchronous operations (like network requests or database queries) and their eventual completion or failure",
      "To define strict type checking",
      "To animate CSS properties"
    ],
    correctOption: 1,
    explanation: "A Promise represents an asynchronous operation that will eventually resolve with a value or reject with an error."
  },
  {
    questionNumber: 46,
    questionText: "Which keyword can be used before a function to allow the use of 'await' inside it?",
    options: ["wait", "async", "defer", "promise"],
    correctOption: 1,
    explanation: "Declaring a function with 'async' (e.g. async function getData() {}) enables using the 'await' keyword inside it."
  },
  {
    questionNumber: 47,
    questionText: "How do you handle errors when using async/await syntax in JavaScript?",
    options: [
      "Using try...catch blocks",
      "Using if...else conditions",
      "Using a while loop",
      "Errors are ignored automatically"
    ],
    correctOption: 0,
    explanation: "Wrapping 'await' calls inside a try { ... } catch (error) { ... } block cleanly catches and handles rejections."
  },
  {
    questionNumber: 48,
    questionText: "What does 'NaN' stand for in JavaScript?",
    options: [
      "Null and Negative",
      "Not a Number (representing an unrepresentable or invalid mathematical result)",
      "New Array Node",
      "Network Action Name"
    ],
    correctOption: 1,
    explanation: "NaN stands for 'Not a Number', produced when a mathematical operation fails (e.g., 'abc' / 2)."
  },
  {
    questionNumber: 49,
    questionText: "Which method is used to write messages or inspect variables in the browser's developer tools console?",
    options: ["console.log()", "print()", "system.out()", "document.write()"],
    correctOption: 0,
    explanation: "console.log() prints informational text and objects to the browser's web developer console."
  },
  {
    questionNumber: 50,
    questionText: "How do you change the text content of a DOM element 'title' safely without parsing HTML?",
    options: [
      "title.textContent = 'New Title'",
      "title.textCode = 'New Title'",
      "title.setContent('New Title')",
      "title.val = 'New Title'"
    ],
    correctOption: 0,
    explanation: "element.textContent sets or gets the raw text content of an element without interpreting HTML markup (safer than innerHTML)."
  }
];
