const express = require("express")
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

// import routes 
const postsRoute = require('./routes/add_wo')

// middleware
app.use(bodyParser.json())
app.use('/posts', postsRoute)
app.use(cors())

// routes 

app.get('/', (req, res) => {
    res.send("We are on home!")
})


// connect to db

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('connected to db')
)

// listen

app.listen(3000)