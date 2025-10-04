const router = require("express").Router()
const bookCtrl = require("../controllers/books")

//router
router.get("/", bookCtrl.Book_index_get)
router.get("/new", bookCtrl.Book_create_get)
router.post("/", bookCtrl.Book_create_post)
router.get("/:booksId", bookCtrl.Book_show_get)
router.get("/:booksId/edit", bookCtrl.Book_edit_get)
router.put("/:booksId",bookCtrl.Book_update_put)
router.delete("/:booksId", bookCtrl.Book_delete)



module.exports = router




