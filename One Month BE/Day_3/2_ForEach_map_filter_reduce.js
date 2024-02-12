// For Each Method
players = ["Sachin","Virat","Rohit","Dhoni"]
players.forEach((player)=>console.log(player))


// map -> This method is used to create new transform array 
arr=[1,2,3,4,5,6,7,8,9]
cube_arr = arr.map(num => num**3)
console.log(cube_arr)
console.log(arr)


// filter method -> 
let arr1 = [1,2,3,4,5,6,7,8,9]
let even_arr = arr1.filter((num)=> num%2==0)
console.log(even_arr)
console.log(arr1)


// reduce method 
arr3=[1,2]
let sum = arr3.reduce((curr,next)=>curr+next)
console.log(sum)


