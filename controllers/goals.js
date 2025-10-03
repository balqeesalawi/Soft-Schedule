const Goal = require("../models/goal")

exports.goals_index_get = async (req, res) => {
  const goals = await Goal.find().populate("owner")
  res.render("goals/index.ejs", { goals })
}

exports.goals_create_get = async (req, res) => {
  res.render("goals/new.ejs")
}

exports.goals_create_post = async (req, res) => {
  const newGoal = await Goal.create({
    goal: req.body.goal,
    duration: req.body.duration,
    owner: req.session.user._id
  })
  res.redirect("/goals")
}
