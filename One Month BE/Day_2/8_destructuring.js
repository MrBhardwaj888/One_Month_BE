//  Destructuring in arrays 

const nums = [1,2,3]
const [a,b,c] = [1,2,3]
console.log(a)
console.log(b)
console.log(c)

const [p,q,r] = [1,2,[1,2,3,4,5]]
console.log(p)
console.log(q)
console.log(r)


// Destructuring of an aobject 
const per={
    name:"ritik",
    age : 67,
    company : "Indo"
}

// const {name , age }=per
// console.log(name)
// console.log(age)

const per_2 ={
    name:"Sombir",
    age:67,
    address:{
        city:"delhi",
        country:"india",
    }
}

const {name, age, address:{city,country}} = per_2
console.log(name)
console.log(age)
console.log(city)
