function greet(name,callback,callback2){
    const greeting = "Hello my name is "
    let location = "my loation is delhi" 
    callback(greeting)
    callback2(location)
}

function displayGreeting(message){
    console.log(message)
}

function displaylocation(message){
    console.log(message)
}

greet("Ritik",displayGreeting,displaylocation)


// Call back Hell -- Pyramid of doom


