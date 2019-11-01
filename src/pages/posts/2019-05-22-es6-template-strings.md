---
title: ES6: Template Strings
date: '2019-05-22'
thumb_img_path: images/12.jpg
content_img_path: images/12.jpg
excerpt: >-
  String concatenation is cool again
template: post
---

ES6 introduced a new syntax for strings called “template string”s or “template literals.” Template strings are not just a cool new way to write strings. They come with new features as well.

Let’s take a look at the ES5 string and refactor it using a template literal.

```
// ES5 string
let myName = 'Tony Nguyen'
```

To create a template literal, just use the backtick(`) character instead of the single or double quotes. The backtick the same key as the ~ key usually below the escape key.

```

// ES6 template string
let myName = `Tony Nguyen`

```

It really is that simple. Now that you know how to write a template string let’s take a look at some of the things you can do with template strings.

### String Concatenation

In ES5, in order to concatenate a string you would have to write code that would look like this:

```
// ES5
function printName(fName, lName) {
  return 'Hi '+ fName + ' ' + lName + '!';
}

printName('Arnold','Schwarzenegger'); // "Hi Arnold Schwarzenegger!"
```

The printName function above is long and prone to error. I will often times have to write out the return more than once because I forgot to add a space or the plus sign.

With template strings you can easily concatenate a string in one line. This is because template strings can take in any valid JavaScript expression.

```
function printName(fName, lName){
  return `Hi ${fName} ${lName}!`
}

printName('Arnold','Schwarzenegger'); // "Hi Arnold Schwarzenegger!"
```

Since template strings can take in any valid JavaScript expression, you can do in-line math with template strings.

```
let bench = 440;
let squat = 545;
let deadlift = 710;

console.log(`Arnold has a combined ${bench + squat + deadlift} lbs with his big three lifts.`);

// Arnold has a combined 1695 lbs with his big three lifts.
```

### Multi-line Strings

Multi-line strings are also easily made with template strings. In ES5, there were a number of workarounds that would help create multi-line strings but, with template strings, you can just add a new line into the string.

```
// ES5
let greeting = "Hello \nWorld!"

// ES6
let greeting = `Hello
World!`
```

Voila, you have created a string with a new line in it.

This has been a very basic overview of template strings. As you can see, they are a great new syntax that will save you time and frustration when you are working with strings. However, you can do a lot more with them than the examples I have shown above, such as [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates). You can learn more about template strings [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

* * *