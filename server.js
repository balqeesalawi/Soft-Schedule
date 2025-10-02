const express = require("express")
const app = express()

const morgan = require("morgan")
app.use(morgan("dev"))

const methodOverride = require("method-override")
app.use(methodOverride("_method"))

require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const session = require("express-session")
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
)

const passUsser = require("./middleware/passUser")
const isSignedIn = require("./middleware/is-signed-in")
app.use(passUsser)
app.use((req, res, next) => {
  res.locals.user = req.session.user
  next()
})

const mongoose = require("./config/db")

app.get("/", (req, res) => {
  res.render("index.ejs")
})

const authRouter = require("./routes/auth.js")
app.use("/auth", authRouter)

const port = process.env.PORT ? process.env.PORT : 3000
app.listen(port, () => {
  console.log("The app is listening")
})
