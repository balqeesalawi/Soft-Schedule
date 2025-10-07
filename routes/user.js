const router = require('express').Router()
const userCtrl = require('../controllers/user.js')
const upload = require('../middleware/upload')

router.get('/:userId', userCtrl.user_show_get)
router.get('/:userId/editPassword', userCtrl.user_edit_get)
router.put('/:userId', userCtrl.user_edit_post)

router.get('/:userId/profile', userCtrl.user_profile_get)
router.post('/:userId/profile', upload.single("picture"),userCtrl.user_profile_post)
module.exports = router
