const router = require('express').Router()

const userCtrl = require('../controllers/user.js')

router.get('/:userId', userCtrl.user_show_get)
router.get('/:userId/editPassword', userCtrl.user_edit_get)
router.put('/:userId', userCtrl.user_edit_post)

module.exports = router
