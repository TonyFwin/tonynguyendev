---
title: ES6: Arrow Functions
date: '2019-05-08'
excerpt: >-
  Putting the fun in Arrow Function
template: post
---

Arrow functions are a newer syntax for writing JavaScript functions. The arrow function syntax was introduced into JavaScript with the ES6 declaration. They are certainly one of the most popular, if not the most popular, features of ES6 and will only continue to grow in usage as time goes on. Even if you do not plan on using arrow functions you should still learn about what they are and how to read them.

### Syntax

An arrow function can be summed down to this syntax:

```
// ES5

function nameOfFunction(parameters) {
  statements
}

// ES6

(parameters) => { statements }
```

To create an arrow function you first need to write an ES5 style function. We’ll use a function that doubles a number as an example.

```
const double = function(num){
  return num * 2;
}

double(5); // 10
```

Next, you will remove the `function` keyword.

```
const double = (num){
  return num * 2;
}
```

Finally you will place a fat arrow => after the arguments list before the curly braces.

```
const double = (num) => {
  return num * 2;
}
```

Just like that, you have created your first arrow function. Now we can begin to clean it up. When arrow functions have just a single JavaScript expression you can remove the curly braces {} from around the body of the function, remove the `return` keyword and place the function all on one line.

```
const double = (num) => num * 2;
```

We can leave out the return, and the curly braces, because arrow functions have an implicit return. This means that the result of the of right side of the function will be returned.

That’s not all. We can simplify the arrow function even more. If your function has exactly one parameter then you can omit the parenthesis around the parameters and the semicolon that follows the function body.

```
const double = num => num * 2

double(6); // 12
```

If you have no arguments to your function you would just have a pair of empty parentheses.

```
const helloWorld = () => {
  console.log('Hello World!');
}

helloWorld() // Hello World!
```

### Lexical this

The ES6 arrow function syntax simplifies your code by allowing you to omit the function, return, and curly braces from the function declaration. This is awesome, but the main benefit of using arrow function is how the keyword `this` is handled.

For more information on this check out [this post](https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work) on Stack Overflow.

With classic function expressions, the keyword `this`, when inside an object method, refers to the object itself. With arrow functions the `this` keyword is not defined on its own, but rather it is inherited from the enclosing scope.

The example below will show what I mean.

```
let person = {
  firstName: 'Donald',
  lastName: 'Glover',
  titles: ['actor', 'comedian', 'writer', 'producer', 'director', 'rapper', 'singer, 'DJ'],
  fullName: function(){
    return `${this.firstName} ${this.lastName}`
  }
}

person.fullName(); // Donald Glover
```

In the fullName function, this.firstName and this.lastName refer to the person object. Let's try the same thing but with an arrow function to see what happens.

```
let person = {
  firstName: 'Donald',
  lastName: 'Glover',
  titles: ['actor', 'comedian', 'writer', 'producer', 'director', 'rapper', 'singer, 'DJ'],
  fullName: () => `${this.firstName} ${this.lastName}`
}

person.fullName(); // undefined undefined
```

When using an arrow function inside of object methods, this is not bound. So, in this case, this's value is looked up in the call stack which will then look for it in the window object. Arrow functions should not be used as object methods. Which leads into my next point.

### When to avoid arrow functions?

As you saw in the example above, arrow functions are not suitable for object methods. Another use case where arrow functions are not suitable is in callback functions with a dynamic context, or onclick listeners.

```
const button = document.getElementById('myButton');

button.addEventListener('click', ()=> {
  this.classList.toggle('active');
});
```

We’re going to toggle a class when the button is clicked. The eventListener, is not bound to the button but will be bound to the window object.

Other use cases where arrow functions should be avoided are constructors, generators and with arguments objects. Which are topics I will go over in a later blog post.

### When to use arrow functions?

Many people, including myself, love to use arrow functions with array helper methods like reduce and map, because it makes the code shorter and more readable. This general rule is laid out in this [post](https://stackoverflow.com/questions/22939130/when-should-i-use-arrow-functions-in-ecmascript-6).

> _Use function in the global scope and for Object.prototype properties.  
> Use class for object constructors.  
> Use => everywhere else._

### Conclusion

While arrow functions do not completely replace classic functions, one should still learn and use arrow functions. They provide us with a shorter and more readable syntax; and most importantly, they solve issues with the binding of `this`.

* * *