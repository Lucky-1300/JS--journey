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