// Initialization of higher order function
function operation(operatorfn,a,b){
    return operatorfn(a,b)
}

function add(a,b){
    return a+b
}

let result = operation(add, 5 ,6)
console.log(result)


