---
title: JavaScript Array Helper Methods
date: '2019-06-05'
thumb_img_path: ''
content_img_path: ''
template: post
---

JavaScript provides a great deal of array methods to help with the manipulation of data. Below I will go over the array helper methods, and why you should use them over the traditional for loop.

### forEach

The forEach helper function iterates through every item in an array, and runs a provided callback function once on each of those items. forEach essentially replaces the for loop. Let's look at how to use the forEach array helper.

```
// using a for loop
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++){
  console.log(numbers[i])
}

// Output
// 1
// 2
// 3
// 4
// 5
```

Let’s refactor this using a classic function declaration.

```
numbers.forEach(function(number){
  console.log(number);
});

// 1
// 2
// 3
// 4
// 5
```

What’s happening above is we are using forEach to iterate over the numbersarray. Each time forEach reads a value from the numbers array it will run the callBack function on the current value. The callback function will then run console.log() on the current value. It looks something like this.

```
// Iteration 1: console.log(number[0]) => 1
// Iteration 2: console.log(number[1]) => 2
// Iteration 3: console.log(number[2]) => 3
// Iteration 4: console.log(number[3]) => 4
// Iteration 5: console.log(number[4]) => 5
```

The exact same thing that the for loop does just with much less code.

Quick note. I, and many others prefer using array helpers with arrow functions and the following examples in this post will be using ES6 arrow function syntax with the array helpers. If you would like a refresher on arrow functions check out my blog post [here](https://dev.to/epicosity/es6-arrow-functions-299j).

```
// using forEach with arrow
numbers.forEach( number => console.log(number));
```

Using the forEach, above we console.log() each value inside the numbers array. As you can see, the function is much shorter and performs the same operation.

Remember — the forEach callback is that it can also take in a second parameter, index. This will keep track of the current index of the number.

```
numbers.forEach((number, index) => console.log(`Number: ${number} is at index: ${index}`));

// Number: 1 is at index: 0
// Number: 2 is at index: 1
// Number: 3 is at index: 2
// Number: 4 is at index: 3
// Number: 5 is at index: 4
```

You might be wondering what the syntax is inside the console.log above. I am using template literals, another awesome feature in ES6. If you don't know what they are, check out this post about the topic [here](https://dev.to/epicosity/es6-template-strings-1c3p)

### map

The map helper is one of the most useful array helpers there is. Like forEach, the map helper iterates over an array running the callback function on each element as it iterates through the array. Map differs in that it will return a new array where the value of each element is the returned value of the callback function that was provided to the map helper. Map is used when you want to perform data manipulation without mutating the original data set.

The map helper below returns a new array that contains the square of each value in the numbers array.

```
const numbers = [1, 2, 3, 4, 5];

// using a for loop
const squared = [];

for (let i = 0; i < numbers.length; i++){
  squared.push(numbers[i] * numbers[i])
}

console.log(squared) // [1, 4, 9, 16, 25]

// using map
const squared = numbers.map(number => number * number);
console.log(squared)// [1, 4, 9, 16, 25]
```

### filter

The filter helper iterates over the array and returns a new array that will contain the values that are returned true when passed through the callback function. The callback function in the filter helper can be thought of as a testing function.

Let’s use the filter helper to return an array containing all of the even values from inside the numbers array.

```
const numbers = [1, 2, 3, 4, 5, 13, 14, 21, 20];

// using a for loop
const filtered = [];

for (let i = 0; i < numbers.length; i++){
  if (numbers[i] % 2 === 0) {
    filtered.push(numbers[i])
  }
}

console.log(filtered); // [2, 4, 14, 20]

// using filter 
const filtered = numbers.filter( number => {
  if (number % 2 === 0){
    return true;
  }
});

console.log(filtered); // [2, 4, 14, 20]
```

### find

The find helper returns the value of the first element in the array to pass the test in the provided callback function. Below, we will use find to get the first value in the numbers array that is greater than 10.

```
const numbers = [1, 2, 3, 4, 5, 10, 13, 14];

// using a for loop
let answer;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10){
    answer = numbers[i];
    break;
  }
}

console.log(answer); // 13

// using find
const answer = numbers.find( number => number > 10);

console.log(answer); //13
```

### some

The some array helper will return true if at least one element in the array passes the test in the callback function.

```
const numbers = [1, 3, 4, 5];

// using a for loop
let evenNumber = false;

for (let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 === 0) {
    evenNumber= true;
    break;
  }
}

console.log(evenNumber); // true

// using some
const evenNumber = numbers.some( number => {
  if(number % 2 === 0) {
    return true;
  }
});

console.log(evenNumber) // true
```

### every

The everyarray helper will return true only if all of the elements in the array pass the testing function. We will use this function to check if all of the values inside the numbers array are less than 10.

```
const numbers = [1, 2, 3, 4, 5];

let isLessThanTen = true;

for (let i = 0; i < numbers.length; i++){
  if(numbers[i] >= 10) {
    isLessThanTen = false;
    break;
  }
}

console.log(isLessThanTen); // true

let lessThanTen = number => number < 10;

// every helper
let isLessthan10 = numbers.every(lessThanTen); 

console.log(isLessthan10); // true
```

### reduce

To oversimplify the reduce function, you can use the reduce helper to transform an array of values into a single value. Some would say that the reduce helper can be used to get the essence of a set of data. We will use reduce to sum up all of the values in the numbers array.

```
const numbers = [1, 2, 3, 4, 5];

// using a for loop
let sum = 0;

for (let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}

console.log(sum) // 15

// reduce helper
numbers.reduce((sum, number) => sum + number, 0); // 15
```

So, the reduce helper is executing the callback function on each iteration and produces a single result at the end. In the example above that value is sum.

The reduce helper method can take in 5 arguments:

1. accumlator
2. currentValue
3. currentIndex
4. array
5. initialValue

```
array.reduce(function(accumlator, currentValue, currentIndex, array), initialValue)
```

The accumulator and currentValue are required, while the other three arguments are optional. On each iteration, the reduce helper first checks to see if an initial value has been passed into the function. If an initial value has been passed in, then the accumulator's value is set to equal the initial value. If no initial value has been passed in, then the accumulator will be set to the value of the element in the provided array.

In the code above, we use the accumulator, currentValue, and initialValuearguments to sum up the values inside the numbers array. To better understand how reduce works, let's walk through each iteration.

If the initial value argument has been passed in, then the function will set the accumulator sum to be equal to the initial value. We pass in an initial value so the sum will be set to 0 on the first iteration. The currentIndex or number is set to the next value in the array. At the beginning of the reducehelper function, that will be 1 or the first value inside the numbers array.

We will add a console.log to the reduce function to show the value of sum on each iteration.

```
const numbers = [1, 2, 3, 4, 5]
numbers.reduce( (sum, number) => return sum + number, 0);

// Iteration 1: sum = 0, number = 1; return sum = 1;
// Iteration 2: sum = 1, number = 2; return sum = 3;
// Iteration 3: sum = 3, number = 3; return sum = 6;
// Iteration 4: sum = 6, number = 4; return sum = 10;
// Iteration 5: sum = 10, number = 5; return sum = 15;
```

So there you have it, you can use reduce to produce a single value from an array of values. However, reduce is really powerful and can do a lot more than sum up values. Take the example below, we have an array that contains a list of people and pets, and their some attributes.

```
let occupants = [
  {name: 'Tony', age: 26, species: 'human'},
  {name: 'Katey', age: 26, species: 'human'},
  {name: 'Marley', age: 5, species: 'canine'},
  {name: 'Harlow', age: 2, species: 'feline'},
  {name: 'Diana', age: 1, species: 'feline'}
];
```

Say you need a list of names of the occupants in your home for your landlord to keep track of. You can use reduce on the occupants array to produce a new array that contains each occupant's name as a string.

```
const occupantNames = occupants.reduce((acc, occupant) => {
  acc.push(occupant.name);

  return acc;
}, []);

console.log(occupantNames) // ["Tony", "Katey", "Marley", "Harlow", "Diana"]
```

### Conclusion

JavaScript array helper methods can help you write cleaner, more legible code in less time. Try these helper methods the next time you think about using a for loop.

* * *
