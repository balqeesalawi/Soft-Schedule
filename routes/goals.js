const router = require("express").Router()
const goalsCtrl = require("../controllers/goals")


router.get("/", goalsCtrl.goals_index_get)
router.get("/new", goalsCtrl.goals_create_get)
router.post("/", goalsCtrl.goals_create_post)

module.exports = router
