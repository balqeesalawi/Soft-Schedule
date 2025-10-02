const User = require("../models/user")
const bcrypt = require("bcrypt")

exports.auth_signin_get = async (req, res) => {
  res.render("auth/sign-in.ejs");
}

exports.auth_signin_post = async (req, res) => {
  const userInDatabase = await User.findOne({ email: req.body.email })
  if (!userInDatabase) {
    return res.send("Login failed. Please try again later...")
  }

  const validPassword = bcrypt.compareSync(
    req.body.password,
    userInDatabase.password
  )
  if (!validPassword) {
    return res.send("Login failed. Please try again later...")
  }

  // Initialize Session
  req.session.user = {
    username: userInDatabase.username,
    _id: userInDatabase._id,
  }

  res.redirect("/")
}
