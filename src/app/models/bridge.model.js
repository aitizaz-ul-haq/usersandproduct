// adding mongoose middleware
const mongoose = require("mongoose");

// creating bridge schema with mongoose
const bridgeSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
});

// creating product model
const Bridge = mongoose.model('bridge', bridgeSchema);

// exporting bridge
module.exports = {
  Bridge,
};
