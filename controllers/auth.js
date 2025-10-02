const User = require("../models/user")
const bcrypt = require("bcrypt")


//APi's


 exports.auth_signout_get = async (req, res)=>{
  req.session.destroy()
  res.redirect("/auth/sign-in")
 }
