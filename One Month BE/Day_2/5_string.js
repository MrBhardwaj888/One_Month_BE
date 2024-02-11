// String 
let name="Ritik"
let city = "Delhi"

console.log(name,city)
console.log(typeof(name))

// Accessing Character based on  index
console.log(name[1]) 
console.log(city[2])

// method to find the length of the string 
console.log(name.length)

// concatenation of the string
console.log(name + city)

// convert all character into upper case 
console.log(city.toUpperCase())
console.log(name.toUpperCase())

// slicing of the string 
console.log("slicing of the string :- ")
console.log(name)
console.log(name.slice(2))
console.log(name.slice(2,5))
console.log(name.slice(-5))
console.log(name.slice(-5,1))

// method to find the index of a character 
console.log(name.indexOf("i"))
console.log(name.indexOf("z"))               // if the character not found   it                                              returns -1

// trim methods
let word = "  Surender  "
console.log(word)
console.log(word.trim())

// split method - it is used to convert the string into the array on the basis of provide gaps
let a1 = "Ritik Bhardwaj Engineer"
console.log(a1.split(" "))