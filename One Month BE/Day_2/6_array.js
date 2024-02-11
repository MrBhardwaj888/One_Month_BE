// initialization of an array 
arr = [1,2,3]
console.log(typeof arr)
arr1 = new Array()
console.log(typeof arr1)
console.log(arr1)

// accessing the array by using the index of the array7
arr2 = [1,2,3,4,5,6,7,8,9,12,23,45,67]
console.log(arr2[0])
console.log(arr2[7])

// to change the value of the selectived index of the array 
arr2[1]=200                 // arrays are mutable 
console.log(arr2)

// methods to insert items in the array 
arr2.push(100)              // push method add the element at the end of the array
console.log(arr2)
arr2.push(89,67,45)
console.log(arr2)

// unshift method
arr2.unshift(234)          // unshift method is used to add the element at the start of an array 
console.log(arr2)

// Removing elements from the array 
arr3=[1,2,3,4,5,6,7,8,9]
arr3.pop()                 // pop method is used to delete the element from the end of the array 
console.log(arr3)

arr4=[1,2,3,4,5,6,7,8,9]
console.log(arr4.shift())   // shift method is used to delete the element from the start of the array 
console.log(arr4)


// Concatenation of an array 
array1 = [1,2,3,4,5]
array2 = [6,7,8,9,10]
let array3 = array1.concat(array2)
console.log(array3)


// method to find the size of an array 
console.log(array1.length)

// convert array into strings
chr_arr = ['r','i','t','i','k',' ','b','h','a','r','d','w','a','j']
console.log(chr_arr.join())
console.log(chr_arr.join(""))

console.log(typeof chr_arr)
console.log(typeof chr_arr.toString())

// slicing of the array -> It does'nt modify the original array 
let nums = [3,4,5,6,7,8,9,10,11,12,13,14,15,16]
console.log(nums.slice(2))
console.log(nums.slice(2,7))
console.log(nums.slice(5,-1))

// splicing of an array -> It modifies the original array
let nums1 = [1,2,3,4,5,6,7,8,9]
let nums2 = nums1.splice(2,2,11,12,13)
console.log(nums2)
console.log(nums1)

// Method to reverse an array
let nums3 = [2,3,4,5,6,7,8,22,23,24]
nums3.reverse()
console.log(nums3)

// method to find the index of the element of the array 
let nums4 = [1,2,3,4,5,6,7,8]
console.log(nums4.indexOf(2))

// Sorting of an array 
let my_arr = [2,4,1,6,3]
my_arr.sort()
console.log(my_arr)

let my_arr2 = [2,3,1,8,5,23,40,12] // to sort this array we require some arguments in the sort() method 
my_arr2.sort((a,b)=>a-b)           // for ascending -> a-b
console.log(my_arr2)

let my_arr3 = [3,4,23,12,3,5,9]
my_arr3.sort((a,b)=>b-a)          // for descending order -> b-a
console.log(my_arr3)










