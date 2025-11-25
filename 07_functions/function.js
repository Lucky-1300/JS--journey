// 4 Ways to create a function


// 1. Without parameter list and without return.
function lucky() {
    console.log("Hello bhaiii")
    console.log("Kya karre ho")
    console.log("aj dinner bahar se kare")
}

lucky()



// 2. Without parameter list and with return.
function beta(){
    return "mkl"
}

console.log(beta())




// 3. With parameter list and without return.
function gamma(name) {
    console.log("hello bro", name)
}

gamma("Lucky Ray")





// 4. With parameter list and with return.
function greet(name){
    return "hello" + " " + name;
}

let a = greet("Lucky");
console.log(a)


// Types of function

// 1. Function DEclaration(normal function)
// Declared with the function keyword,can be hoisted.

function greet(){
    console.log("hello")
}



// 2.Function Expression
// Stored in a variable; not hoisted

const greet = function(){
    console.log("hello")
}

// 3.Arrow function(fat arrow function)
// Shorter syntax ,introduced in ES6

() => {
    console.log("hello")
}


// 4.Anonymous Function
// A function without a name,often used in expressions
setTimeout(function () {
    console.log("hello")
}, 2000);



// 5.IIFE(Immediately Invoked Function EXpression)
// A function that runs as soon as it's defined
(function(){
    comsole.log("hello")
}) ()