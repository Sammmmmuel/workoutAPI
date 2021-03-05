const express = require("express")
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

// middleware
app.use(bodyParser.json())


// routes 

app.get('/', (req, res) => {
    res.send("Hello World!")
})


// connect to db

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('connected to db')
)

// listen

app.listen(6000)