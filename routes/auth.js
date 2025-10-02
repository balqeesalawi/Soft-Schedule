const router = require('express').Router()


const autherCtrl = require('../controllers/auth')

router.get('/sign-up', authCtrl.auth_signup_get)
router.post("/sign-up", authCtrl.auth_signup_post)

router.get("/sign-in", autherCtrl.auth_signin_get)
router.post("/sign-in", autherCtrl.auth_signin_post)
