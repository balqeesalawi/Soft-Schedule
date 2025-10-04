const router = require("express").Router()
const goalsCtrl = require("../controllers/goals")


router.get("/", goalsCtrl.goals_index_get)
router.get("/new", goalsCtrl.goals_create_get)
router.post("/", goalsCtrl.goals_create_post)
router.get("/filter", goalsCtrl.goals_filter_get)
router.get("/:id/edit", goalsCtrl.goals_edit_get)
router.get("/:id", goalsCtrl.goal_update_post)
module.exports = router
