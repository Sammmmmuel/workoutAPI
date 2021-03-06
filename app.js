const express = require("express")
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

// import routes 
const postsRoute = require('./routes/add_wo')
const authRoute = require('./routes/auth.js')

// middleware
app.use(bodyParser.json())
app.use('/posts', postsRoute)
app.use(cors())
app.use('/api/user', authRoute)

// routes 

app.get('/', (req, res) => {
    res.send("We are on home!")
})


// connect to db

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('connected to db')
)

// listen

app.listen(3000, () => console.log('Server is up and running at port 3000'))