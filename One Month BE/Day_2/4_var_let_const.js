// var :-
// 1 - It's is used to define a variable
// 2 - It's is a function scoped but not blocked scope
// 3 - It's is Hoisted

function f1(){          // function scoped
    var i = 67
    console.log(i)
}

f1()
// console.log(i) 

{                       // not blocked scope
    var j = 78;
    console.log(j)
}
console.log(j)

// Let :-
// 1 - No Hoisting
// 2 - It also has blocked scope

{
    let r = "ritik"
    console.log(r)
}

// const :-
// - scope is exactly same as let 
// - const variable are final the  can't be re-assigned

const d = "ritik "
console.log(d)       // the value of d is now never be reassigned 
