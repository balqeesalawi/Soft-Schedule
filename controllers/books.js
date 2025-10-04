//const session = require("express-session")
const { book } = require("express")
const Book = require("../models/book")
const User = require("../models/user")

//API'S

exports.Book_index_get = async (req, res) => {
  const reader = await Book.find().populate("owner")
  res.render("books/index.ejs", { reader })
}

exports.Book_create_get = async (req, res) => {
  res.render("books/new.ejs")
}

exports.Book_create_post = async (req, res) => {
 req.body.owner = req.session.user._Id
 await Book.create(req.body)
  res.redirect("/books/")
}

 exports.Book_show_get = async (req, res)=>{
const reader = await book.findById(req.params.BookId)
res.render("books/show.ejs")
}

// //exports.Book_edit_get = async (req, res) =>{
  //
//  res.render("books/edit.ejs")
// }

//exports.Book_update_put = async (req, res) => {
//
//res.redirect("/books")
//}
//if else

  //export.Book_delete = async (req, res)=>{
    //const reader = await findById(req.params.booksId).populate("owner")
    //
    //}

    //exports.isDOneReading_post

