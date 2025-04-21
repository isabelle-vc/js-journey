// A comment in JS

/* Comment with 
multiple lines
in JS */

// Exercise 1__________________________________ //

console.log("📌📌📌 Exercise 1 📌📌📌")

function showTime() {
    console.log(`⏱️ Now it's ${new Date().toLocaleString()}`)
}

showTime()
for (var i = 0; i < 1000000000; i++){ // Just to past the time
}
showTime()

// 
function greetings(name){
    var message = "Hello " + name
    console.log(message)
}

var userName = "Ghost"
greetings("Nina")
greetings(userName)

console.log(i)

// Return something
function addTwoNums(a,b){
    var c = a + b;
    console.log(c);
    return c;
}

function multiplyTwoNums(a,b){
    var c = a * b;
    console.log(c);
    return c;
}

var result = addTwoNums(2,3) + multiplyTwoNums(2,2)
console.log(result)


// console.log(result + 7)

console.log("📌📌📌 Exercise 2 📌📌📌")
// Arrays

var train = ["container1", "container2", "container3"]
console.log(train[1])

//function that takes an array as input and display all items of this array
function listArrayItems(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(i, a[i])    // the count start at zero, but if wanted t start at one |i| would be |i+1|
    }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);


console.log("📌📌📌 Exercise 3 📌📌📌")

function letterFinder(word, match) {
    for (i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log ("Foun the", match, "at", i+1)
        } else {
            console.log("No match found at", i+1)
        } 
    }
}

letterFinder ("test","t")

console.log("📌📌📌 Exercise 4 📌📌📌")

// dot notation
var school = {}
    school.students = 100;
    school.professors = 10;
    school.rooms = 5;

// brackets notation
var apartment = {}
    apartment["rooms"] = 3;
    apartment["floor"] = 5;
    apartment["garage"] = 2;

// comma delimited
var user = {
    name: "Fulano",
    email: "user@yahoo.com",
    passwordCharacters: 16,
    accountSecurity: "strong",
}

console.log(user)
console.log(user.name)

// update property
user["name"] = "Ciclano"    // brackets notation
// user.name = "Beltrano"   // dot notation

console.log(user)

// Evaluate expressions with brackets dotation

var loginData = ["name", "email", "birthday", "passwordCharacters"]

for (i = 0; i < loginData.length; i++) {
    console.log(user[loginData[i]])
}

/* 

There is an array with the main values for a successful login
There is an object that contains all user's properties of information
Instead of console.log which user property asked for the login, a [for loop] is used
For loop:
The value must start at the position 0
The loop must run until the value reach max length of the variable "loginData"
The variable "loginData" has a index length from 0 to 3
After verifying if the condition still true, in a positive scenario the value must increase one position [i=i+1]
A successful loop should console.log the user information asked in the current value position on the loginData
Translation: 
i = 0 -> (user[loginData[0]]) -> (user[name])
i = 1 -> (user[loginData[1]]) -> (user[email])
i = 2 -> (user[loginData[2]]) -> (user[birthday]) -> undefined because the property doesn't exist
i = 3 -> (user[loginData[3]]) -> (user[passwordCharacters])
*/

console.log("📌📌📌 Exercise 5 📌📌📌")

var calendar = ["number", "day", "month", "year"]

console.log(calendar)

calendar.push("weekend day")
calendar.push("week number")

console.log(calendar)

calendar.pop()

console.log(calendar)

function passTime(a, b, c){
    var list = []
    list.push(a)
    list.push(b)
    list.push(c)
    return list
}

var time = passTime ("hour", "minute", "seconds")
console.log (time)

// SUS caculator --------------------------------------------------


// 10 questões com 10 respostas entre 1 e 5
// Se a resposta for ímpar -> x - 1
// Se a resposta for par -> 5 - x
// A soma dos valores finais deve ser multiplicado por 2.5


var answers = [1, 5, 3, 1, 4, 3, 2, 2, 5, 1]
var result = 0

if (answers.length == 10) {
    for (i=0; i<answers.length; i++){
        if ((i+1) % 2 !== 0){
            result += answers[i] - 1
        } else {
            result += 5 - answers[i]
        }
        console.log("index " + i)
        console.log(result)
    }
    result = result*2.5
    if (result >= 68){
        console.log(result + " Good")
    } else {
        console.log(result + " Bad")
    }
}

// Math Random

var decimal = Math.random()

console.log(decimal)
// To make it a number bigger than 1, multiple the result by 10
console.log(decimal * 10)

// Ceil Method

var rounded = Math.ceil(0.89)
console.log(rounded)

// Random and Ceil combined

var decimalNumber = Math.random() * 10
var roundedNumber = Math.ceil(decimalNumber)
console.log(roundedNumber)

// Concat

var greet = "Hello "
var names = "Monamona"
var lastName = "Lisa"

console.log(greet + names)
console.log(greet.concat(names, lastName))

console.log("Hello".concat("mona").concat("li"))

console.log(names.indexOf("a"))
console.log(names.lastIndexOf("a"))
console.log(names.split("o"))
console.log(lastName.toUpperCase())
console.log(lastName.toLowerCase())