---
title: ES6: default, rest, and spread.
date: '2019-09-12'
template: post
---

ES6 added syntactic sugar to help us write code that is both cleaner and more concise. Today I am going to talk about the feature: default parameters, rest parameters and the spread operator.

### default

In JavaScript, if not value is passed into a function the the parameter(s) will default to undefined. The default behavior of setting function parameters to undefined can cause error in your functions and this is where default parameters comes in play.

Default function parameters are used when you need named parameters to be initialized with a value when no value will be passed or when the value of the parameter is undefined. Let's take a look at an example of when you might want to use default function parameters.

Below is an example of a generic increment function. The function takes in two values and adds them together. The first parameter is the initial number and the second is how much we need to increment or add to that initial number.

```
function increment(number, increment){
  number + increment;
}

increment(2, 5); // 7
```

Let’s make our function a little more flexible with default function parameters. Suppose you want that if the user does not input a second parameter for increment parameter, that the function would still run and increment the initial number by one. Let’s try that out with ES5 syntax:

```
function increment(number, increment){
  if (typeof increment == 'undefined' ) increment = 1;
  return number + increment;
} 

increment(1, 2) // 3
increment(1) // 2
```

We wrote a conditional to check if the increment parameter was undefined, and if it was undefined we assigned the value of 1 to the increment parameter.

With ES6 syntax you can check for undefined named parameters without using conditionals you needed with ES5. Here it is below:

```
function increment(number, increment = 1){
  return number + increment;
} 

increment(5,5); // 10
increment(5); // 6
```

Instead of writing a conditional in the body of your function, you can just add an equals sign after the parameter you wish to reassign in the case that it is not provided a value. Now not only will your code be more flexible, but you have a more concise function that is easier to read and less prone to error.

### rest and spread

The rest and spread operators look identical but perform different operations. Both use the three dots ... syntax but rest is used for condensing and spread is used for expanding.

### rest

The rest operator is used to condense a group of elements down into a single array.

Let’s create a function that adds three numbers together using the reduce array helper function.

If you need a refresher on how Array.reduce works check out my last blog post on [Array Helper Methods](https://dev.to/epicosity/javascript-array-helper-methods-40mp).

```
function add(x, y, z){
  let numbers = [x, y, z];

  return numbers.reduce((acc, number) => {
    return acc + number;
  }, 0);
}

add(1, 2, 3); // 6
```

The above function works fine when there is a limited number of arguments, in this case only three number can ever be added together. What happens if you were to pass in a fourth or a fifth argument?

```
add(1, 2, 3, 4, 5); // 6
```

The function, written as it was above, will only accept the first three arguments passed into the function, and will just ignore the rest. So the result is still 6 even though there were additional parameters were passed in.

Using ES6 rest, we can make the function much more flexible. Now, with rest, the add function can take in an indefinite amount of parameters and return a single result.

```
function add(...numbers){
  return numbers.reduce((acc, number) => {
    return acc + number;
  }, 0);
}

add(1, 2, 3, 4, 5); // 15

add(2, 4, 6, 8, 10); // 30
```

Now you can run the add function with as many parameters as you need.

When you use ...numbers a new array named numbers is created and all the arguments passed into the add() function will be pushed into this array. After all the parameters have been read into the numbers array, the function will continue now running .reduce on the numbers array.

### spread

Where the rest operator is used to condense elements into a single array, the spread operator is used to do reverse. Spread is used to turn an iterable, like a String or an array, into its individual elements.

Let’s see how it works by using spread for concatenating arrays. First we’ll look at how it’s done in ES5 before we rewrite it using the ES6 spread syntax.

```
// ES5 array concatenation

const array1 = ['Cersie', 'Jaime'];
const array2 = ['Tyrion'];

const combinedArray = array1.concat(array2);

console.log(combinedArray); // ['Cersie' 'Jaime', 'Tyrion']
```

In ES5 we had to create a new array and run the Array.prototype.concat()method on one array and passing in another as an argument.

With ES6 spread you can just use the spread operator by placing ... in front of both arrays inside the `[]` brackets to concatenate the arrays.

```
// Array concatenation with spread
const array1 = ['Cersie', 'Jamie'];
const array2 = ['Tyrion'];

const lannisters = [...array1, ...array2];

console.log(lannisters); // ['Cersie' 'Jaime', 'Tyrion']
```

When you see ... in JavaScript code you can tell the difference between rest and spread by these general rules.

1. If the syntax is used in function arguments of a function declaration or expression then it is the Rest parameter syntax.
2. Otherwise it is the Spread operator.

* * *