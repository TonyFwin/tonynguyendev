---
title: ES6':' destructuring
date: '2019-09-18'
template: post
---

Destructuring is a JavaScript syntax that allows us to assign to variables, data from arrays and iterables, like objects. Let’s first look at using the destructuring syntax on objects.

### Destructuring Objects

In ES5, you would assign properties to variable by individually assigning the value of your object property to the variable.

ES5

```
var band = {
  name: 'Silent Planet',
  genre: 'Metalcore',
  albums: ['The Night God Slept', 'Everything Was Sound', 'When the End Began']
}

var name = band.name;
var genre = band.genre;
var albums = band.albums;
```

With ES6 destructuring you can reduce that those assignments as long as the variable name that you are assigning a value matches the property name like below.

```
let band = {
  name: 'Silent Planet',
  genre: 'Metalcore',
  albums: ['The Night God Slept', 'Everything Was Sound', 'When the End Began']
}

const { name } = band;
const { genre } = band;
const { albums } = band;
```

You can shorten up the syntax by combining all the variable assignments into one:

```
const { name, genre, albums} = band;
```

Tthe above syntax will only work if the variable names match the names of the properties you are trying to destructure. If the variable names do not match you can still perform the destructuring assignment with this syntax:

```
const {name:var1, genre:var2, albums:var3} = band;

console.log(var1); // Silent Planet
```

Notice that the property name on the left and the variable name on the right. You can think of this as you are taking the property value -> variable. Left to right assignment.

### Destructuring Arrays

In ES5 in order to extract data from an array you would need to access the array in by getting the value of the item at a certain position in the array:

```
var exampleArray = [1, 2, 3];

var val1 = exampleArray[0];
var val2 = exampleArray[1];
var val3 = exampleArray[2];
```

With the destructuring assignment syntax you can now just write one line to get all values you need the above array;

```
let [val1, val2, val3] = exampleArray;

console.log(va1, val2, val3); // 1 2 3
```

Destructuring an array looks a lot like when you are destructuring an object but you just replace the curly braces with brackets.

You can also skip values while using the destructuring syntax if needed:

```
const someArray = [4, 8, 15];

const [first,,last] = someArray;

console.log(first, last);// 4 15
```

If you need to you could use the rest syntax, which we learned about in my prior [blog post](https://dev.to/epicosity/es6-default-rest-and-spread-36ce), to extract all the items remaining in the array into a new array.

```
const someOtherArray = [4, 8, 15, 16, 23, 42];

const [first, second, ...third] = someOtherArray;

console.log(first); // 4
console.log(second); // 8
console.log(third); // [15, 16, 23, 42];
```

### Functions Arguments

One last common use case for destructuring is passing in an object as a functions arguments. Below we have a function that takes in an object with the attributes of a vehicle.

```
const someFunction = car => {
  const { make, model, yearBuilt } = car;
  return make;
} 

let car = {make: 'Ford', mode: 'Escort', yearBuilt: 1993};

someFunction(car); //Ford
```

You can use destructuring on your object that was passed into the function. the syntax inside the function body is the same pattern as we have been using throughout this post. However, there is a slightly different, and shorter way to do this below:

```
const someFunction = ({ make, model, yearBuilt }) = {
  return make;
}
```

You can destructure the object properties out into individual variables right inside your function parameters.

Thank you for reading and I hope this post helps you use destructuring inside your own code.

* * *