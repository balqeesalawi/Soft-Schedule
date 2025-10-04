const router = require("express").Router()
const goalsCtrl = require("../controllers/goals")


router.get("/", goalsCtrl.goals_index_get)
router.get("/new", goalsCtrl.goals_create_get)
router.post("/", goalsCtrl.goals_create_post)
router.get("/filter", goalsCtrl.goals_filter_get)
router.get("/:goalId/edit", goalsCtrl.goals_edit_get)
router.put("/:goalId", goalsCtrl.goal_update_put)
router.delete("/:goalId", goalsCtrl.goals_delete)

module.exports = router
