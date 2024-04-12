---
title: "ES6: destructuring"
subtitle: ""
date: 2024-04-12T05:00:00.000Z
excerpt: Learn how to get things out of other things
template: post
---
Destructuring is a power feature that simplifies data extraction from arrays and objects. By leveraging destructuring, developers can bid farewell to verbose syntax and embrace a more elegant approach to variable assignment. In this article, we will delve into the power of restructuring, its syntax, applications, and some practical examples.

# Destructuring Objects

Let's kick things off by looking at how we can use destructuring to extract values from objects. Unlike its ES5 counterpart which relies on property assignments, we can use ES6 destructuring to reduce code while also improving the readability of our code.

With ES6 destructuring you can reduce those assignments as long as the variable name that you are assigning a value matches the property name like below.

```text
let band = {
  name: 'Silent Planet',
  genre: 'Metalcore',
  albums: ['The Night God Slept', 'Everything Was Sound', 'When the End Began']
}
const { name } = band;
const { genre } = band;
const { albums } = band;
```

You can shorten the syntax by combining all the variable assignments into one:

```
const { name, genre, albums } = band;
```

The above syntax will only work if the variable names match the names of the properties you are trying to destructure. If the variable names do not match you can still perform the destructuring assignment with this syntax:

```text
const {name:var1, genre:var2, albums:var3} = band;
console.log(var1); // Silent Planet
```

Notice that the property name is on the left and the variable name is on the right. You can think of this as you are taking the property value -> variable. Left to right assignment.s 

In ES5, you would assign properties to a variable by individually assigning the value of your object property to the variable.

```text
var band = {
  name: 'Silent Planet',
  genre: 'Metalcore',
  albums: ['The Night God Slept', 'Everything Was Sound', 'When the End Began']
}
var name = band.name;
var genre = band.genre;
var albums = band.albums;
```

# Destructuring Arrays

Next, let's explore how to better extract data from Arrays. In ES5, to extract data from an array you would need to access the array by getting the value of the item at a certain position in the array:

```text
var exampleArray = [1, 2, 3];
var val1 = exampleArray[0];
var val2 = exampleArray[1];
var val3 = exampleArray[2];
```

With the destructuring assignment syntax, you can now just write one line to get all the values you need in the above array;

```text
let [val1, val2, val3] = exampleArray;
console.log(va1, val2, val3); // 1 2 3
```

Destructuring an array looks a lot like when you are destructuring an object but you just replace the curly braces with brackets.

You can also skip values while using the destructuring syntax if needed:

```text
const someArray = [4, 8, 15];
const [first,,last] = someArray;
console.log(first, last);// 4 15
```

If you need to you could use the rest syntax, which we learned about in my prior [blog post](https://dev.to/tonyfwin/es6-default-rest-and-spread-aig-temp-slug-7688501?preview=a0b8a1801f31a58e21b9ffac367a2d0c5b8dc1199f410f878757099252c47853f79f0e26af84447bba50fdd556fc0c3f50bffd5ac0284e8f2546f90e), to extract all the items remaining in the array into a new array.

```text
const someOtherArray = [4, 8, 15, 16, 23, 42];
const [first, second, ...third] = someOtherArray;
console.log(first); // 4
console.log(second); // 8
console.log(third); // [15, 16, 23, 42];
```

# FUNCTIONS ARGUMENTS

Building on our exploration of object and array destructuring, let's turn our attention to function arguments. The last common use case for destructuring that we'll discuss is passing in an object as a function's arguments. 

Below we have a function that takes in an object with the attributes of a vehicle.

```text
const someFunction = car => {
  const { make, model, yearBuilt } = car;
  return make;
} 
let car = {make: 'Ford', mode: 'Escort', yearBuilt: 1993};
someFunction(car); //Ford
```

You can use destructuring on your object that was passed into the function. the syntax inside the function body is the same pattern as we have been using throughout this post. However, there is a slightly different, and shorter way to do this below:

```text
const someFunction = ({ make, model, yearBuilt }) = {
  return make;
}
```

You can destructure the object properties into individual variables right inside your function parameters.

This is the wrap-up for our div into ES6 destructuring. I want to extend a thanks to you for reading my post. I hope you can use the information to make your code a bit cleaner or more efficient. Happy coding!