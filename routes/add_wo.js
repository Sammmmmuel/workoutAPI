const express = require('express')
const router = express.Router()
const Post = require('../models/AddWo')



// get back all posts
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})


// submits a post
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

// gets specific post
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
})

// delete post 
router.delete('/:postId', async(req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params, postId })
        res.json(removedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router