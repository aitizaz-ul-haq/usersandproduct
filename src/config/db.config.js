// adding mongoose middleware
const mongoose = require("mongoose");

// creating uri for mongoose conection
const uri = process.env.DB_URL;

// providing options for mongoose connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// connection with database using mongoose
mongoose
  .connect(uri, options)
  .then(() => {
    console.log(`db Connection established`);
  })
  .catch((error) => {
    console.log(error);
  });
