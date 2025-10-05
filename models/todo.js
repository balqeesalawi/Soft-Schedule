const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const ToDo = mongoose.model('ToDo', todoSchema)
module.exports = ToDo