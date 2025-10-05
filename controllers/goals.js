const Goal = require("../models/goal")

exports.goals_index_get = async (req, res) => {
  if (!req.session.user) return res.send("You must be logged in")

  const goals = await Goal.find({ owner: req.session.user._id }).populate(
    "owner"
  )
  res.render("goals/index.ejs", { goals, selectedDuration: "all" })
}

exports.goals_create_get = async (req, res) => {
  res.render("goals/new.ejs")
}

exports.goals_create_post = async (req, res) => {
  req.body.owner = req.session.user._id
  await Goal.create({
    goal: req.body.goal,
    duration: req.body.duration,
    owner: req.session.user._id,
    isCompleted: req.session.isCompleted,
  })
  res.redirect("/goals")
}

exports.goals_filter_get = async (req, res) => {
  if (!req.session.user) return res.send("You must be logged in")

  const { duration } = req.query
  const filter = { owner: req.session.user._id }

  if (duration && duration !== "all") {
    filter.duration = duration
  }

  const goals = await Goal.find(filter)
  res.render("goals/index.ejs", { goals, selectedDuration: duration || "all" })
}

exports.goals_edit_get = async (req, res) => {
  const currentGoal = await Goal.findById(req.params.goalId)
  res.render("goals/edit.ejs", { goal: currentGoal })
}

exports.goal_update_put = async (req, res) => {
  if (!req.session.user) {
    return res.send("You must be logged in")
  }

  const currentGoal = await Goal.findById(req.params.goalId)

  if (currentGoal.owner.equals(req.session.user._id)) {

    req.body.isCompleted = req.body.isCompleted === "on"

    await currentGoal.updateOne({
      goal: req.body.goal,
      duration: req.body.duration,
      isCompleted: req.body.isCompleted
    })
    res.redirect("/goals")
  } else {
    res.send("You don't have permission to do that.")
  }
}

exports.goals_delete = async (req, res) => {
  if (!req.session.user) {
    return res.send("You must be logged in to delete a goal")
  }
  const goal = await Goal.findById(req.params.goalId)
  if (!goal) return res.send("Goal not found")

  if (goal.owner.equals(req.session.user._id)) {
    await goal.deleteOne()
    res.redirect("/goals")
  } else {
    res.send("You don't have permission to do that")
  }
}
