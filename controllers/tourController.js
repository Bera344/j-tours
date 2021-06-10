
const Tour = require("./../models/tourModel")


exports.getAllTours = async (req, res) => {
    // console.log(req.requestTime)
    try {
 
        //vec "find()" i gjen cdo gje qe ka ne Tour(te modeli, skema)
        const tours = await Tour.find()

        res.json({
            status: "success",
            //"tours.length" kjo na tregon sa tours i kemi
            results: tours.length,
            data: { tours }
            // requested: req.requestTime,
        })
    }

    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }

}



exports.createTour = async (req, res) => {
    //O1 with PROMISE
    //const newTour = new Tour({})
    //newTour.save()

    //ASYNC FUNCTION

    try {
        //ketu e krijuam nje tour te ri nga skema Tour dhe te dhenat i marrim nga body ne Postman(dmth cka shenon useri ne postman)
        const newTour = await Tour.create(req.body)

        res.json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    }

    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }
}



exports.getTour = async (req, res) => {
                                    //.id ose .name ose .rating
    const tour = await Tour.findById(req.params.id)
    try{
        res.json({
            status: "success",
            data: {tour}
        })
    }

    
    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }
}




exports.updateTour = async (req, res) => {

    
    try{                                        //e gjejme me id    //e update me cfaredo qe shenojme ne body
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            //validator-kontrollues. Shikon sipas modelit a e ke shenuar mire, psh ne model eshte "price" e ti e ke shenuar "cmimi"
            runValidators: true
        })
            
        
        res.json({
            status: "success",
            data: {tour}
        })
    
    }

    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }
    
}

exports.deleteTour = async (req, res) => {

    
    try{
        //await Tour.findByIdAndDelete(req.params.id)
        //ose
        const tour = await Tour.findByIdAndDelete(req.params.id)
        res.json({
            status: "success",
            data: null
        })
    }
   
    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }
}

















//KETO NUK NA DUHEN ME SEPSE KETO ISHIN PER STATIC DATA KU ID NUK GJENEROHET VETET POR NE DUHET, EDHE BODY CHECK E CAKTUAM TE 

//FS eshte per file system, na nevojitet per leximin e fajllave
// const fs = require('fs')

// e kem lexu filen i cili i permban te gjitha tours
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))






//MIDDLEWARE   

//CHECK ID
// exports.checkId = (req, res, next, val) => {
//     console.log(`Tuour id is: ${val}`)

//     if (req.params.id * 1 > tours.length) {
//         return res.json({
//             status: "fail",
//             message: "Invalid ID"
//         })
//     }
//     //"move on" po i tregon qe ky middleware u krye edhe le te vazhdon te tjetra
//     next()
// }
//END CHECK ID







//CHECK BODY
// exports.checkBody = (req, res, next) => {

//     if (!req.body.name || !req.body.price) {
//         return res.json({
//             status: "fail",
//             message: "Missing name or price"
//         })
//     }

//     next()
// }
//END CHECK BODY






//GET TOUR 
// exports.getTour = (req, res) => {
 
//ky funksion rq.params po thot cka po kerkon ti nga routes, pra ne kete rast id ne routes
//sepse derii tani vete e kemi gjeneruar id e tash nuk na duhet se mogo vete e gjeneron id
 // console.log(req.params)

    // po e marrim id-n dhe po e konvertojm ne string
    //req.id*1 e konverton ne string
//     const id = req.params.id * 1
//     const tour = tours.find(el => el.id === id)


//     res.json({
//         status: "success",
//         data: {
//             tour
//         }
//     })
// }
//END GET TOUR






//CREATE
// exports.createTour = async (req, res) => {
 // console.log(req.body)

    // ka me u shtu nje dokument i ri
    // const newId = tours[tours.length - 1].id + 1
    // const newTour = Object.assign({ id: newId }, req.body)

    // tours.push(newTour)
    //File system shkruaj nje file
//     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
//         res.json({
//             status: "success",
//             data: {
//                 tour: newTour
//             }
//         })

//     })
//}
//END CREATE
