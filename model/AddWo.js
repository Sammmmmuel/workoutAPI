const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bodyPart: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('add_wo', PostSchema)