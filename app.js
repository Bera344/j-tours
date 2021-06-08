
const { config } = require('dotenv')
const express = require('express')
const morgan = require('morgan')

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')


const app = express()



// 1) MIDDELWARE
// middelware - mes req, res
//nese plotesohet ai kusht nga  atehere behet ai action
console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

app.use(express.json())

//middleware per casje ne fajlla statik te HTML
app.use(express.static(`${__dirname}`))

//dev eshte development
app.use(morgan('dev'))












app.use((req, res, next) => {
    console.log("Hello from the middelware")
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})


// 2) ROUTE HANDLERS



// 3) ROUTE

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

module.exports = app