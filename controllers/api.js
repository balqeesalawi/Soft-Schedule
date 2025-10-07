const axios = require("axios")
const baseUrl = "http://localhost:3000/books"

exports.api_book_get = (req, res) =>{
  axios({
    method: "get",
    url: baseUrl
  })
  .then(response => {
    const result = response.data.books
    res.render('books/index.ejs', {data: result})

  })
  .catch(err => {
    console.log(err);

  })
}
