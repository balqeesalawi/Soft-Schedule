const User = require("../models/user.js")
const bcrypt = require('bcrypt')

exports.user_show_get = async (req, res)=> {
    const user = await User.findById(req.params.userId)
    res.render("user/profile.ejs", {user})
}

exports.user_edit_get = async (req, res)=> {
    const user = await User.findById(req.params.userId)
    res.render('user/editPassword.ejs', {user})
} 