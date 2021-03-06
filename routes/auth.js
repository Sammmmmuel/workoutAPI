const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { registerValidation, loginValidation } = require('../validation')



router.post('/register', async(req, res) => {
    // validate data 
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // checking user
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send('Email already exists.')

    // hashing 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const savedUser = await user.save()
        res.send({ user: user.save._id })
    } catch (err) {
        res.json(400).send(err)
    }
})

// login 
router.post('/login', async(req, res) => {
    // validate data
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        // checking email
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Email or password is wrong')
        // checking password
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('invalid password')

    // create and assign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN)
    res.header('auth-token', token).send(token)

    res.send('Logged in')

})
module.exports = router