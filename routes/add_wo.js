const express = require('express')
const router = express.Router()
const Post = require('../model/AddWo')
const verify = require('./verifyToken')



// get back all posts
router.get('/', verify, async(req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})


// submits a post
router.post('/', verify, (req, res) => {
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
router.get('/:postId', verify, async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
})

// delete post 
router.delete('/:postId', verify, async(req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

// update post
router.patch('/:postId', verify, async(req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } })
        res.json(updatedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router