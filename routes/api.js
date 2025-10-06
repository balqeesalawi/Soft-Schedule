const router = require("express").Router()

const apiCtrl = require("../controllers/api")

router.get("/", apiCtrl.api_book_get)
module.exports = router
