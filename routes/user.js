const router = require('express').Router()

const userCtrl = require('../controllers/user.js')

router.get('/:id', userCtrl.user_id_get)
module.exports = router
