const router = require('express').Router()
const userCtrl = require('../controllers/user.js')
const upload = require('../middleware/upload')

router.post('/:userId/profile', upload.single("picture"),userCtrl.user_profile_post)
router.get('/:userId/profile', userCtrl.user_show_get)
router.get('/:userId/editPassword', userCtrl.user_edit_get)
router.put('/:userId', userCtrl.user_edit_post)
router.put('/:userId/username', userCtrl.user_name_put);

module.exports = router
