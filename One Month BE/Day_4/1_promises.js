/** const simranpromise = new Promise((resolve,reject)=>{
    let parentDecision = true
    if(parentDecision){
        resolve("yay ab shaadi karenge",parentDecision)
    }
    else{
        reject("papa ne ias dhood lia hai sorry.. ",parentDecision)
    }
});

simranpromise.then((msg,pd)=>{
    console.log("Simran message :",msg,pd)
    console.log("lets book the weding menu")
}).catch((msg)=>{
    console.log("Simran msg : ", msg)
    console.log("Tinder kaha ho yaar ")

})**/

const f1Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{      
        if(Math.random()>0.5){
            resolve(" Hey I am in for goa")
        }else{
            reject("Friend:1 - Sorry mere pet mein dard hai")
        }
    },3000)
})
const f2Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{      
        if(Math.random()>0.5){
            resolve(" Hey I am in for goa")
        }else{
            reject("friend2: Sorry meri billi  bimar  hai")
        }
    },2000)
})
const f3Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{      
        if(Math.random()>0.5){
            resolve(" Hey I am in for goa")
        }else{
            reject("friend3: Sorry mujhe pw ka live class lena hai")
        }
    },2000)
})

Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
    console.log(msg)
    console.log("Yay we are going")
}).catch((msg)=>{
    console.log(msg)
    console.log("yaar band karo goa ka plan ")
})