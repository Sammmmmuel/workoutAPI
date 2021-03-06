const express = require('express')
const router = express.Router()
const Post = require('../models/AddWo')

router.get('/', (req, res) => {
    res.send('we are on posts')
})

router.post('/', (req, res) => {
    const post = new Post({
        name: req.body.name,
        bodyPart: req.body.bodyPart,
        description: req.body.description
    })
    post.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ message: err })
        })
})


module.exports = router