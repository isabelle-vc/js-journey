// A comment in JS

/* Comment with 
multiple lines
in JS */

// Exercise 1__________________________________ //

console.log ("%cExercise 1.1", "color: green; font-size: 24px; font-style: italic;");

console.log ("%cHello", "color: green;", "Exercise 1.1", "📒");

console.log ("Hello " + "Exercise 1.1 " + "📘");

// The command "%c" let you customize the text with CSS properties
// the style works when using the web browser console, on the Code Runner extension only shows the normal text

// Exercise 2__________________________________ //

var person; //doesn't have value
var person = "John" //value assigned
var greeting = "Hello"
console.log (greeting, person)

// When the variables already exists, to change it's value you can use [name variable = new value], there's no need to set [var] again

var petDog = "Rex"
var petCat = "Pepper"
var dogSound = "woof"
var catSound = "purr"

console.log ("My pet dog's name is:", petDog, "and he says", dogSound)
console.log ("My pet cat's name is:", petCat, "and she says", catSound)

catSound = "meow"

console.log ("My pet cat's name is: " + petCat + " and now she says " + catSound)
// Plus (+) can substitute the comma (,) but it doesn't automatically add space betwen the valeus, so you need to add it manually inside the string

// Exercise 3__________________________________ //

console.log (2+2)
console.log (2-2)
console.log (2/2)
console.log (2*2)
console.log (5>6)
console.log (5<6)
console.log (10==10)