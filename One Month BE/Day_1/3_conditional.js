//  If Statement
var a = 2;
if(a%2==0){
    console.log("Even")
}
console.log("After IF ")

// IF-Else Statement 
var d = 9;
if(d%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}

// If-Else --> Ternary Operator
var num_3 = 45;
num_3%2 == 0 ? console.log("Even Number") : console.log("Odd")


// Nested If-Else
var num_4 = 60;
if(num_4>10)
{
    if(num_4<100)
    {
        console.log("The Number Is Greater Than 0 and less than 100")
    }
    else{
        console.log("The Number is Greater Than 100 ")
    }


}
else{
    console.log("Number is less than 10 ")
}


// Nested If In Ternary Operator
var num_5=4 
num_5>10 ? num_5<100 ? console.log("The Number is Is Greater Than 0 and Less Than 100") : console.log("The Number is greater than 100") : console.log("The number is less than 10 ")  

// switch case statement 
var fruits = "Apple";
switch(fruits){
    case "banana":
        console.log("It is a banana ")
        break
    case "Apple":
        console.log("This is an apple")
        break
    case "Orange":
        console.log("This is an oramge ")
        break
}


