const express = require("express")
const fs = require("fs")

const app = express()

app.get("/", (req, res) => {
    res.json({
        message: "Hello from the server side :)",
        app: "jTours"
    })
})

app.post("/", (req, res) => {
    res.send("You can post to this URL")
})



//2 funksione i pari e konverton ne json file edhe tjetra i merr te dhenat nga path
const tours = JSON.parse(fs.readFileSync("$_dirname}/dev-data/data/tours-simple.js"))




app.listen(3000, () => {
    console.log("Server is listening!")
})