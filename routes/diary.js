const router = require("express").Router()
const diaryCtrl = require("../controllers/diary")

router.get("/", diaryCtrl.diary_index_get)
router.get("/new", diaryCtrl.diary_create_get)
router.post("/", diaryCtrl.diary_create_post)
router.get("/:diaryId/edit", diaryCtrl.diary_edit_get)
router.put("/:diaryId", diaryCtrl.diary_update_put)
router.delete("/:diaryId", diaryCtrl.diary_delete)
router.post('/filter', diaryCtrl.diary_filter_post)

module.exports = router
