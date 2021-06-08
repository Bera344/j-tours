//MONGOOSE na jep mundesi te lidhemi me databazen. Eshte librari e gatshme ku ndertojme modele pa e prekur tabelen e databazes. Na jep mundesi ti modifikojme objektet me lehte 

const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config({ path: "./config.env" })
const app = require("./app")

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









//testTour ruaje dokumentin(save perndryshe nuk e shfaq) dhe pastaj shfaqe ne konsolle dokumentin dhe kap errora nese ka
// testTour.save().then(doc => {
//     console.log(doc)
// }).catch(err => {
//     console.log("Error")
// })

//catch eshte funksion qe kap errora
//END TEST model




app.listen(3000, () => {
    console.log("Server is listening!")
})