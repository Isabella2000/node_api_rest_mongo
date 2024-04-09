const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publication_date: String,
});

//* se exporta de esta manera diferente porque es un modelo de mongoose, y viene asi por su manera noSQl 
module.exports = mongoose.model("Book", bookSchema);
