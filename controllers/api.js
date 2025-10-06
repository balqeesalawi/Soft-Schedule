const axios = require("axios")
const baseUrl = "../controllers/books.js"

exports.api_book_get = (req, res) =>{
  axios({
    method: "get",
    url: baseUrl
  })
  .then(response => {
    const result = response.data.req.session._id
    res.render('books/index.ejs', {data: result})

  })
  .catch(err => {
    console.log(err);

  })
}
