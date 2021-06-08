//the dhenat qe don ti dergon behen ose nuk behen

const p = new Promise((resolve, reject)=>{
    const a = 1+1
    if(a == 3){
        resolve("Success")
    }
    else{
        reject("Failed")
    }

})


//Kjo eshte vetem Promise
p.then(message =>{
    console.log("The promise is", message)
}).catch((message)=>{
    console.log("The promise is", message)
})


//ASYNC FUNCTIONS
//Eshte funksion Asyncrom
async function something(){
    try{

    }
    catch(err){

    }
}