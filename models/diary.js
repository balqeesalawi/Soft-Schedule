const { text } = require('express')
const mongoose = require('mongoose')

const diarySchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        enum: ["Happy", "Sad", "Angry", "Relaxed", "Anxious", "Excited", "Tired", "Thoughtful", "Confident", "Frustrated"],
        required: true
    },
    owner: {
         type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
     }

})

const Diary = mongoose.model('Diary', diarySchema)
module.exports = Diary
