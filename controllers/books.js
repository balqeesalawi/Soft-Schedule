//const session = require("express-session")
const { book } = require("express")
const Book = require("../models/book")

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
  if (req.body.isDoneReading === "on") {
    req.body.isDoneReading = true
  } else {
    req.body.isDoneReading = false
  }
  await Book.create(req.body)
  res.redirect("/books")
}

exports.Book_show_get = async (req, res) => {
  const reader = await Book.findById(req.params.booksId)
  res.render("books/show.ejs", { reader })
}

exports.Book_edit_get = async (req, res) => {
  const reader = await Book.findById(req.params.booksId)
  res.render("books/edit.ejs", { reader })
}

exports.Book_update_put = async (req, res) => {
  if (req.body.isDoneReading === "on") {
    req.body.isDoneReading = true
  } else {
    req.body.isDoneReading = false
  }
   const reader = await Book.findByIdAndUpdate(req.params.booksId)
   reader.set(req.body)
   await reader.save()
  res.redirect(`/books/${req.params.booksId}`)
}

exports.Book_delete = async (req, res) => {
  const reader = await Book.findByIdAndDelete(req.params.booksId)
  res.redirect("/books")
}
