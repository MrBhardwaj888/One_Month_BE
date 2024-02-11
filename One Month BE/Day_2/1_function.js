// Define Function 
function helloStudent(){
    console.log("Hello Student! ")
}
helloStudent() // calling a function 

// I want to get the sum of two number 
function sum(a,b){
    return a+b
}

// default value concept in function 
function sum(a,b=5){
    console.log(a+b)
}
sum(5);

// argument as an argument in function
function func(){
    console.log(arguments)
}
func(1,2,3,4,5,6,7,8,9)
