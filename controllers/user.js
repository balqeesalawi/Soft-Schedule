const User = require("../models/user.js")
const bcrypt = require('bcrypt')

// to show the profile page
exports.user_show_get = async (req, res)=> {
    const user = await User.findById(req.params.userId)
    res.render("user/profile.ejs", {user})
}

// to show form for editing password
exports.user_edit_get = async (req, res)=> {
    const user = await User.findById(req.params.userId)
    res.render('user/editPassword.ejs', {user})
}

// to post edit password form
exports.user_edit_post = async (req, res)=> {
    const user = await User.findById(req.params.userId)
    if(!user){
        return res.send('No user with that ID exists!')
    }
    const validPassword = bcrypt.compareSync(
        req.body.oldPassword,
        user.password
    )
    if (!validPassword) {
        return res.send('Your old Password was not correct! Please try again')
    }
    if (req.body.newPassword !== req.body.confirmPassword){
        return res.send('Password and confirm password must match')
    }
    const hashedPassword = bcrypt.hashSync(req.body.newPassword, 10)
    user.password = hashedPassword
    await user.save()
    return res.send(`Your password has been updated, ${user.username}!`)
}


// for uploading profile photo form 
exports.user_profile_post = async (req,res) => {
if (req.file){
    req.body.picture = `/uploads/${req.file.filename}`
}
await User.findByIdAndUpdate(req.params.userId, req.body)
    req.session.user.picture = req.body.picture
    res.redirect(`/user/${req.params.userId}/profile`)
}

exports.user_name_put = async (req, res) => {
    const userInDatabase = await User.findOne({ username: req.body.username })
  if (userInDatabase) {
    return res.send("Username already taken")
  }


    const user = await User.findById(req.params.userId)
    user.username = req.body.username
    await user.save()
    res.redirect(`/user/${req.params.userId}/profile`)
} 
