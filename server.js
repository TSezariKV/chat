require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Chat = require('./models/chat')
const homeRoutes= require('./routes/home')

const app = express()

// connect to database
mongoose.connect(process.env.dbURL)
    .then(() => {
        // listening for requests
        app.listen(process.env.PORT, () => {
            console.log(`Listening for requests on port ${process.env.PORT}!`)
        })
    })
    .catch(err => console.log(err))

// middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/', homeRoutes)