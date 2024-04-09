const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRoutes = require("../src/routes/book.routes");
const { config } = require("dotenv");
config();

const app = express();
const port = process.env.PORT || 3000;

// usamos middleware para los bodies
app.use(bodyParser.json());

// Para conectar la BD
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection

app.use("/books", bookRoutes)

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
