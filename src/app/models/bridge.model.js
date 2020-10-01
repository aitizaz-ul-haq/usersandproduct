// adding mongoose middleware
const mongoose = require("mongoose");

// creating bridge schema with mongoose
const bridgeSchema = mongoose.Schema({
  username: {
    type: String,
    requied: true,
  },
  productchoice: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  productid: {
    type: String,
    required: true,
  },
});

// creating product model
const Bridge = ("bridge", bridgeSchema);

// exporting bridge
module.exports = {
  Bridge,
};
