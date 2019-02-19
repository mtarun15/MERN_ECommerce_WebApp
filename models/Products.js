const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
