//  define of an arrow function
var hello = () => console.log("Hello world")

// arguments of an arrow function 
var sum = (a,b) => a+b
console.log(sum(5,7))

// multi lines of function body 
var process = (a,b) => {
    console.log("need to process")
    return a*b
}

// IIFE -> Immediately Invoked Function expression
(function(){
    console.log("hello javascript ")
})()

