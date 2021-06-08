const mongoose = require("mongoose")


//TEST model
//ndertimi i skemes si klase, vetem struktura
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true,
        //trim i heq hapesirat e panevojshme qe zenen karaktere ne shenim, psh "jhfgef    ajhdgsyd   ygjf"
        trim: true
    },
    duration:{
        type: Number,
        required: [true, "A tour must have a duration"],
    },
    maxGroupSize:{
        type: Number,
        required: [true, "A tour must have a group size"],
    },
    difficulty:{
        type: String,
        required: [true, "A tour must have a difficulty"],
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, "A tour must have a price"]
    },
    priceDiscount: Number,

    summary:{
        type: String,
        required: [true, "A tour must have a description"],
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
    imageCover:{
        type: String,
        required: [true, "A tour must have a image"],
    },
    //sepse ne backhand nuk dergojme img por vec pathin, edhe e dergojme list se ka disa foto
    image:[String],
        
    createdAt:{
        type: Date,
        default: Date.now()
    },

    startDates : [Date]
})


//e ndertuam nje tabele (modelin) me emrin Tour me te dhenat nga TourSchema
const Tour = mongoose.model("Tour", tourSchema)

//e mbushim tabelen (modelen)
const testTour = new Tour({
    name: "Paris",
    rating: 4.3,
    price: 333
})

module.exports = Tour