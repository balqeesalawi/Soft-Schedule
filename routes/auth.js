const router = require('express').Router()

const autherCtrl = require('../controllers/auth')


router.get("/sign-in", autherCtrl.auth_signin_get)
router.post("/sign-in", autherCtrl.auth_signin_post)
