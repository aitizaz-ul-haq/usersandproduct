// adding mongoose middleware
const mongoose = require("mongoose");

// creating svhema using mongoose
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// creating user model using mongoose model
const User = mongoose.model("user", userSchema);

// exporting user model
module.exports = {
  User,
};
