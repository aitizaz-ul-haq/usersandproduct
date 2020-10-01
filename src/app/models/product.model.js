// adding mongoose middleware
const mongoose = require("mongoose");

// creating schema using mongoose
const productSchema = mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  productCatagory: {
    type: String,
    requier: true,
  },
});

// creating product model using mongoose middleware
const Product = mongoose.model("product", productSchema);

// exporting product model
module.exports = {
  Product,
};
