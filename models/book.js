const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    numOfPages: {
        type: Number,
        required: true
    },
    pagesPerDay: {
        type: Number,
        required: true
    },
    isDoneReading: {
        type: Boolean
    },
    owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book