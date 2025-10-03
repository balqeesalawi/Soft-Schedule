const mongoose = require("mongoose")

const goalSchema = new mongoose.Schema({
  duration: {
    type: String,
    enum: ["week", "month", "year"],
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

const Goal = mongoose.model("Goal", goalSchema)
module.exports = Goal
