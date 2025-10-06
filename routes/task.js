const router = require("express").Router()

const taskCtrl = require("../controllers/task")

router.get('/', taskCtrl.task_index_get )
router.get('/new', taskCtrl.task_create_get)
router.post('/', taskCtrl.task_create_post)
router.get('/:taskId', taskCtrl.task_show_get)
router.get('/:taskId/edit', taskCtrl.task_edit_get)
router.put('/:taskId', taskCtrl.task_update_put)
router.delete('/:taskId', taskCtrl.task_delete)
router.post('/filter', taskCtrl.task_filter_post)

module.exports = router