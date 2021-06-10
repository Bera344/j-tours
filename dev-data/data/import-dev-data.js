//MONGOOSE na jep mundesi te lidhemi me databazen. Eshte librari e gatshme ku ndertojme modele pa e prekur tabelen e databazes. Na jep mundesi ti modifikojme objektet me lehte 
const fs = require('fs')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const tour = require("../../models/tourModel")
const Tour = require("../../models/tourModel")

dotenv.config({ path: "./config.env" })


//te envoirment gjendet nje databaze(te config.env), e cila eshte DATABASE
const DB = process.env.DATABASE.replace(
    "<password>", process.env.DATABASE_PASSWORD
)


//CONECTION - lidhja me databaze
//DB eshte databaza jote emertimi me larte te const
//kurse ky objekt eshte si defaulf te cdo conetion 
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log("DB connection succesful"))



//READ J-SON
//Ketu po i lexojme te dhenat nga tours-simple.js
//JSON.parse() i konverton te dhenat e json filave ne string
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8"))



//IMPORT DATA TO DATABASE

const importData = async () =>{
    try{
        //te dhenat jane te ruajtura ne variablen tours me lart 
        await Tour.create(tours)
        console.log("Data added")
    }

    catch (err) {
        console.log(err)
    }
}


//DELETING OLD DATA
const deleteData = async () =>{
    try{
        await Tour.deleteMany()
        console.log("Data deleted")
    }

    catch (err) {
        console.log(err)
    }
}

if(process.argv[2] === "--import"){
    importData()
}
else if(process.argv[2] === "--delete"){
    deleteData()
}
console.log(process.argv)
//Ne "argv" jane te ruajtura komandat --import & --delete npm i ksdjs - global

