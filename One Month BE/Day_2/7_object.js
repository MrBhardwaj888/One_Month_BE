// Initialization of an object
const user = { 
    name : "Ritik",
    age : "23",
    city : "Delhi",

}

// Acccessing the Data
console.log(user.name)
console.log(user['name'])

// Adding data to the object 
user.country = "India"
user.continent = "Asia"
console.log(user)

// deleting object keys in the and the object itself
delete user.continent
console.log(user)

// iteration in an object
let person = {
    name:"ritik",
    age:23,
    address : {
        city:"Delhi",
        country:"india",
        continent:"Asia",
    }

}
for(let key in person){
    console.log(key)
}

for(let key in person){
    console.log(key , " => ", person[key]  )
}

console.log(Object.keys(person))      // when you wants only the keys
console.log(Object.values(person))    // when you wants only the values
console.log(Object.entries(person))   // It Gives The key:Value pair of the object


// cloning an object using assign
const new_person = Object.assign({},person)
console.log(new_person)

const new_person1 = Object.assign({},person , {role:"Developer"})
console.log(new_person1)                                            // method to add new entry in the clone object 

