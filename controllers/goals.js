const Goal = require("../models/goal")


exports.goals_index_get = async (req, res) => {
  const goals = await Goal.find().populate("owner")
  res.render("goals/index.ejs", { goals })
}

exports.goals_creat_get = async(req, res) => {
  res.render("goals/new")
}

exports.goals_creat_post = async (req, res) => {
  req.body.owner = req.session.user._id
   const newGoal = await Goal.create({
    goal: req.body.goal,
    duration: req.body.duration,
  })
  res.redirect("/goals")
}

