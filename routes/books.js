const router = require("express").Router()
const bookCtrl = require("../controllers/books")

//router
router.get("/", bookCtrl.Book_index_get)
router.get("/new", bookCtrl.Book_create_get)
router.post("/", bookCtrl.Book_create_post)

//


module.exports = router




