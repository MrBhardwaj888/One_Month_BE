//  Global Scope 
var name = "Ritik Bhardwaj"

console.log(name) // declartion 1 
var func = () => console.log(name)
func()                                     // calling of function 


// Block scope
{
    let c = 78
    console.log(c)

    var d = 88
    console.log(d)
}
console.log(d)

// 