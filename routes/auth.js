const router = require('express').Router()

const authCtrl = require('../controllers/auth')

router.get('/sign-up', authCtrl.auth_signup_get)
router.post("/sign-up", authCtrl.auth_signup_post)

module.exports = router
