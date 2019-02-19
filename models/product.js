const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
