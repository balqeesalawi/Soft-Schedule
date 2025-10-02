const mongoose = require('mongoose')

const diarySchema = new mongoose.Schema({
    notes: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        required: true
    },
    owner: {
         type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
     }

})

const Diary = mongoose.model('Diary', diarySchema)
module.exports = Diary