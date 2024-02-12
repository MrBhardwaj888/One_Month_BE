function outerfn(){
    let outervar = "I am from the outer function"
    function innerfn(){
        console.log(outervar)
    }
    return innerfn
}

// to use those variables outside , which are declare inside the function 
// we use a method which is known as closures.

let fn = outerfn()
fn()

// real world example of the closure 
function customerCounter(){
    let count = 0
    return function(){
        count++
        console.log("New Customer Count is", count)
    }
}

let count = customerCounter()
count()
count()
