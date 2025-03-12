// A comment in JS

/* Comment with 
multiple lines
in JS */

// Exercise 1__________________________________ //

function showTime() {
    console.log(`⏱️ Now it's ${new Date().toLocaleString()}`)
}

showTime()


console.log("📌📌📌 Exercise 1 📌📌📌")

console.log("%cExercise 1.1", "color: green; font-size: 24px; font-style: italic;");

console.log("%cHello", "color: green;", "Exercise 1.1", "📒");

console.log("Hello " + "Exercise 1.1 " + "📘");

/* 
The command "%c" let you customize the text with CSS properties
the style works when using the web browser console, on the Code Runner extension only shows the normal text
*/

// Exercise 2__________________________________ //

console.log("📌📌📌 Exercise 2 📌📌📌")

var person; //doesn't have value
var person = "John" //value assigned
var greeting = "Hello"
console.log(greeting, person)

// When the variables already exists, to change it's value you can use [name variable = new value], there's no need to set [var] again

var petDog = "Rex"
var petCat = "Pepper"
var dogSound = "woof"
var catSound = "purr"

console.log("My pet dog's name is:", petDog, "and he says", dogSound)
console.log("My pet cat's name is:", petCat, "and she says", catSound)

catSound = "meow"

console.log("My pet cat's name is: " + petCat + " and now she says " + catSound)
// Plus (+) can substitute the comma (,) but it doesn't automatically add space betwen the valeus, so you need to add it manually inside the string

// Exercise 3__________________________________ //

console.log("📌📌📌 Exercise 3 📌📌📌")

console.log(2 + 2)
console.log(2 - 2)
console.log(2 / 2)
console.log(2 * 2)
console.log(5 > 6)
console.log(5 < 6)
console.log(10 == 10)

// Exercise 4__________________________________ //

console.log("📌📌📌 Exercise 4 📌📌📌")

// check if the currentTime variable is between 9 a.m. and 5 p.m.

var currentTime = 10
console.log(currentTime > 9 && currentTime < 17)
console.log(currentTime < 9 || currentTime > 17)
console.log(currentTime < 11 || currentTime > 17)

var petHungry = true
console.log("Pet is hungry:", petHungry)
console.log("Feeding the pet")
console.log("Pet is hungry:", !petHungry)

// change permanently the value stored in the petHungry variable from true to false
petHungry = !petHungry
console.log("Pet is hungry again:", petHungry)

console.log(22 % 5)
// checks for value
console.log(5 == 5)
console.log(5 == "5")
console.log(5 != 6)
console.log(5 != "6")

// checks for value and datatype
console.log(5 === 5)
console.log(5 === "5")
console.log("5" === "5")
console.log(5 !== 5)
console.log(5 !== "5")
console.log("5" !== "5")

// concatenation
console.log("inter" + "net")
console.log(365 + " days")
console.log(1 + "2")

// addition assignment operator with numbers and strings
var overtime = 1
overtime += 2
overtime += 8
overtime += 1
overtime += 4
console.log(overtime)

var storyTime = ""
storyTime += "Once"
storyTime += " upon"
storyTime += " a"
storyTime += " time"
storyTime += " in"
storyTime += " a"
storyTime += " far"
storyTime += " far"
storyTime += " way"
storyTime += " land"
storyTime += " ..."
console.log(storyTime)

// operator precedence and associativity
console.log(5 > 4 > 3)
console.log(5 > 4 > 0) // true == 1

console.log((5 + 4) * 3);

// Exercise 5__________________________________ //

console.log("📌📌📌 Exercise 5 📌📌📌")

// Taks 1
var score = 8
console.log("Mid-level skills:", score > 0 && score < 10)

// Taks 2
var timeRemaining = 0
var energy = 10
console.log("Game over:", timeRemaining == 0 || energy == 0)

// Taks 3
var num1 = 2
var num2 = 5
var test1 = num1 % 2
var test2 = num2 % 2
var result1 = test1 == 0
var result2 = test2 == 0
console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)

// Taks 4
console.log(5 + 10)

// Taks 5
var now = "Now in "
var three = 3
var d = "D!"
console.log(now + three + d)

// Taks 5
var counter = 0
counter += 5
counter += 3
console.log(counter)

// Exercise 6__________________________________ //

console.log("📌📌📌 Exercise 6 📌📌📌")

// if, esle if, else

var place = "second"

if (place == "first") {
    console.log("Gold")
} else if (place == "second") {
    console.log("Silver")
} else if (place == "third") {
    console.log("Bronze")
} else {
    console.log("No medal")

}

// Switch statement
// The variant is on the example above


switch (place) {
    case "first":
        console.log("Gold");
        break;
    case "second":
        console.log("Silver");
        break;
    case "third":
        console.log("Bronze");
        break;
    default:
        console.log("No medal");
}

// Here the first, second and third have the same result, without the need of using console and repeating the output

switch (place) {
    case "fourth":
        console.log("Close third")
        break;
    case "first":
    case "second":
    case "third":
        console.log("Top 3")
        break;
    default:
        console.log("No medal");
}

// Exercise 7__________________________________ //

console.log("📌📌📌 Exercise 7 📌📌📌")

// Task 1
var age = 18

if (age == 65 || age > 65) {  // Could be written as [if(age >= 65)
    console.log("You get your income from your pension");
} else if (age > 18 && age < 65) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

// Task 2
var day = "Friday"

switch (day) {
    case "Monday":
        console.log("Week day");
        break;
    case "Thuesday":
        console.log("Week day");
        break;
    case "Wednesday":
        console.log("Week day");
        break;
    case "Thursday":
        console.log("Week day");
        break;
    case "Friday":
        console.log("Week day");
        break;
    case "Saturday":
        console.log("Weekend day");
        break;
    case "Sunday":
        console.log("Weekend day");
        break;
    default:
        console.log("This isn't the gregorian calendar");
}

// Or it could also be written like the example below

switch (day) {
    case "Monday":
    case "Thuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Week day");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend day");
        break;
    default:
        console.log("This isn't the gregorian calendar");
}

// Exercise 8__________________________________ // 

console.log("📌📌📌 Exercise 8 📌📌📌")

// For loops

for (var i = 1; i <= 3; i++) { // or i=i+1
    console.log(i)
}
console.log("Worked")

for (var i = 5; i > 0; i--) { // or i=i-1
    console.log(i)
}
console.log("It's going down")

// While loops

var counter = 3

while (counter > 0) {
    console.log(counter)
    counter = counter - 1 // or counter-- or counter++
}
console.log("Happy New Year")

// Exercise 9__________________________________ // 

console.log("📌📌📌 Exercise 9 📌📌📌")

// Task 1

for (var i = 1; i <= 5; i++) { // I had used [i >= 5], but this condition is already false, as 1 is less than 5
    console.log(i)
}
console.log("Counting completed")

// Task 2

for (var i = 5; i > 0; i--) {
    console.log(i)
}
console.log("Counting completed 2")

// Task 3

var number = 1

while (number <= 5) {
    console.log(number)
    number = number + 1
}
console.log("Good job")

// Task 4

var number = 5

while (number > 0) {
    console.log(number)
    number--
}
console.log("Good job 2")

// Task 5

var year = 2018

while (year <= 2022) {
    console.log(year)
    year = year + 1
}
console.log("That's what you lived")

// Exercise 10__________________________________ // 

console.log("📌📌📌 Exercise 10 📌📌📌")

// Multiplication table for 2

for (var o = 2; o > 1 && o < 4; o++) {
    for (var t = 0; t <= 10; t++) {
        console.log(o, "x", t, "=", o * t)
    }
}
console.log("Multiplication by 2")

// Multiplication table from 0 to 10 - it works, the result is just to long

// for(var i=0; i <=10; i++){
//     for (var j=0; j <=10; j++){
//         console.log(i, "x", j, "=", i*j)
//     }
// }
// console.log("Muliplication from 0 to 10")

// 3 nested loops - it works, the result is just to long

// for(var i=0; i <=10; i++){
//     for (var j=0; j <=10; j++){
//         for (var k=-1; k>=(-3); k--){
//             console.log(i, "x", j, "x", k, "=", ((i*j)*k))
//         }
//     }
// }
// console.log("3 the lucky number")

// Exercise 11__________________________________ // 

console.log("📌📌📌 Exercise 11 📌📌📌")

var cubes = "ABCDEFGHI"

for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px;"
    console.log("%c" + cubes[i], styles)
}

/*
var cubes = "ABCDEFG"
traduzir: string A B C D E F G
           index 0 1 2 3 4 5 6 
cubes.length = 7
who is the last index? 6 or cubes.length - 1
*/

var cubes = 'ABCDEFGHIJKLM21';
//styling console output using CSS with a %c format specifier
for (var i = cubes.length - 1 ; i >= 0; i--) {  // decrescent way,from end to start
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log(`index: ${i}`)
    console.log("%c" + cubes[i], styles)
}
console.log(i)
console.log(styles)


/*
The cubes[i] targets each individual letter in the loop, based on the current value of the i variable.
In other words, cubes[i], when i is equal to 0, is: A.
Then, cubes[i], when i is equal to 1, is: B.

This goes on for as many loops my for loop runs - and this is determined by the cubes.length value.
The cubes.length returns a number, in this case 9
Since cubes is a string of characters the cubes.length gives me the length of the string saved in the variable.

index = length - 1
*/

// Exercise 12__________________________________ // 

console.log("📌📌📌 Exercise 12 📌📌📌")

console.log("condition if, esle if, else with for loop")

for (var i = 1; i > 0 && i <= 10; i++){
    if (i == 1) {
        console.log("Gold")
    } else if (i == 2) {
        console.log("Silver")
    } else if (i == 3) {
        console.log("Bronze")
    } else {
        console.log(i)
    }
}


console.log("condition 'switch' with for loop")

for (var i = 1; i > 0 && i <= 10; i++) {
    switch (i) {
        case 1: // First attempt was using "1", but this is a string, and the [var i] gives a numerical value
            console.log("Gold medal")
            break;
        case 2:
            console.log("Silver medal")
            break;
        case 3:
            console.log("Bronze medal")
            break;
        default:
            console.log(i);
    }
}

for (var i = 0; i < 1000000000; i++){

}

showTime()