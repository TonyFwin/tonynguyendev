---
title: ES6 Variable Declarations':' const, let
date: '2019-04-24'
thumb_img_path: images/12.jpg
content_img_path: images/12.jpg
excerpt: >-
  Use const when you can. Otherwise, use let, but never use var.
template: post
---

### TLDR

Use const when you can. Otherwise, use let, but never use var.

### What is ES6, and what features does it have?

ECMAScript 6, commonly known as ES6 or ES2015, was the JavaScript specification that was released in 2015.

The release of ES6 brought many new powerful concepts like classes, template tags, arrow functions and much more. All of the features of ES6 are standard on the big frameworks such as [React](https://reactjs.org/) and [Angular](https://angular.io/), and all of the [modern browsers](https://caniuse.com/#search=es6) have adopted the features as well. For the other browsers, there are popular tools like [Babel](https://babeljs.io/), which will transpile the ES6 code into ES5 to be used on legacy browsers.

ES6 is quickly becoming standard, and now is the perfect time to learn.

### Variable Declarations

### var

If you’ve ever used JavaScript then you’ve probably used var. var has been used to declare variables since the language was first created.

Here are some things to know about var, including that variables defined using the var keyword can be reassigned:

```
var x = 10;
console.log(x); // 10
x = 50;
console.log(x) // 50
```

Variables declared using var are scoped to the current execution context, which means that the variable is either function scoped or only available within the function in which they are initialized. If the variable is not defined inside a function, then the it is globally scoped, and added to the window object.

```
// Function scoped
function counter(){
 for (var i = 0; i \< 5; i++) {
 console.log('Hello World');
 }
 console.log(i)
}
counter() 
// Prints 'Hello World' five times
// 5

console.log(i) // Uncaught ReferenceError: i is not defined
```

This occurs because i is scoped to the function.

```
var age = 10;
function getOlder(){
 for(var i = 0; i \< 5; i++){
 age+=i
 }
 console.log(age)
}

getOlder() // 20

console.log(age) // 20
age = 15;
console.log(age) // 15
```

In general, globally scoped variables that can be reassigned as pleased are considered to be bad practice and can lead to a lot of headaches down the road.

### let

The keyword let, like var, is used to declare variables whose value is expected to change over time. Like var, let does not need a value when initialized and can be reassigned. For the most part, the keyword let works the same as the keyword var, but there are two big differences. First, you cannot re-declare variables that have been initialized with let, but you can with var.

```
var dog = "Marley"
console.log(dog) // Marley

var dog = "Spot"
console.log(dog) // Spot

let cat = "Harlow"
let cat = "Diana" // Uncaught SyntaxError: Identifier 'cat' has already been declared
```

Trying to re-declare a variable that has already been declared returns a syntax error. Re-declaring variables should be avoided, as it reduces the legibility code and may lead to unwanted side effects.

The other difference between let and var is that the let keyword is block-scoped, and var is function-scoped.

Below is a repeat of the counter function from above, but this time the forloop uses let to declare the i variable.

```
// Block-scoped
function counter(){
 for (let i = 0; i \< 5; i++) {
 console.log('Hello World'); 
 }
 console.log(i)
}
counter() 
// Prints 'Hello World' five times
// undefined
```

The console.log(i) after the for loop returns undefined instead of the number five. This is because the variable i is now scoped to the block of the for loop instead of the entire counter function.

### const

Unlike let, const should be used to declare variables where we expect the value to never change or remain constant. Like let, const is block-scoped. Variables declared with const cannot be reassigned, but this does not mean they are immutable.

```
const pets = ['Marley']

pets = ['Marley', 'Harlow'] // Uncaught TypeError: Assignment to constant variable.

pets.push('Harlow')
pets // ["Marley", "Harlow"]

const person = {};
person.firstName = 'Tony';

console.log(person); // {firstName: 'Tony'}
```

### Refactoring

```
// ES5
var make = 'Honda'
var model = 'Civic'
var owner = 'Tony'
var mileage = '50000'
```

Above, we have four attributes of a car — make, model, owner, and mileage. Let’s refactor this to use the ES6 variable declarations.

How I like to approach it is first changing all uses of var to const. I do this because const has stronger binding rules that will help you write better code, and it can prevent hours of debugging in the future.

```
const make = 'Honda'
const model = 'Civic'
const owner = 'Tony'
const mileage = '50000'
```

Now I look at it and think, “Which of these will likely change in the future?” The make and model of the car will never change, but it is likely that the owner and mileage will change. So we will change those declares to use let.

```
// ES6
const make = 'Honda'
const model = 'Civic'
let owner = 'Tony'
let mileage = '50000'
```

### Variable Hoisting

JavaScript declarations using var are hoisted. Hoisting is a behavior in JavaScript where declarations are hoisted or brought to the top of the current scope. This means is that you can use variables and functions before they are declared. An example below will explain this better.

```
age = 26;
console.log(age);
var age;

// 26
```

This correctly logs 26 even though age was not declared until after console.log() was called. What this actually looks like in practice is this.

```
var age = 26;
console.log(age)
```

The above code, show’s what JavaScript is doing behind the scenes.

However, this does not occur when using ES6 variable declarations let and const;

```
age = 26;
console.log(age)
let age;

// Uncaught ReferenceError: age is not defined
```

While JavaScript will still hoist all declarations including let and const, what JavaScript does when a using var for declaration is also initializing it with undefined. let and const will throw an error if you try to call them before they have been assigned a value. You should always declare your variables at the top of their respective scopes and should initialize variables when they are declared. The behavior of let and const will help you write cleaner code.

### Why?

So are you still not convinced as to why you should switch from using varto const and let? The most compelling reason is code readability in the future. In a large program with many variable declarations, it might not be obvious which variables are expected to change and which are not. Using the ES6 variable declarations will improve the legibility of your code, and help you write code that is less error-prone.

* * *
