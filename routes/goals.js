const router = require("express").Router()
const goalsCtrl = require('../controllers/goals')

//Routes
router.get("/goals",goalsCtrl.goals_index_get)
router.get("/new", goalsCtrl.goals_creat_get)
router.post("/goals", goalsCtrl.goals_creat_post)



module.exports = router
