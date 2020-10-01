// including user model from usermodel
const { User } = require("../models/user.model");

// Add a user
const adduser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const response = await User.create({
      username,
      password,
      email,
    });

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

// get all users from db
const getusers = async (req, res) => {
  try {
    const response = await User.find();

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    res.status(200).json({
      status: true,
      error: error.message,
    });
  }
};

// get user form db with id
const getuserByid = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await User.findById({
      _id: id,
    });

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    res.status(200).json({
      status: true,
      error: error.message,
    });
  }
};

// get a user from db by email address of user
const getuserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const response = await User.findOne({
      email: email,
    });

    return res.status(200).json({
      statu: true,
      response: response,
    });
  } catch (error) {
    res.status(200).json({
      status: true,
      error: error.message,
    });
  }
};

// update a user by providing id 
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const updateObj = req.body;

    await User.updateOne({ _id: id }, { $set: updateObj });

    const response = await User.find({ _id: id });

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    res.status(200).json({
      status: true,
      error: error.message,
    });
  }
};

// delete a user from id by providing id 
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    await User.deleteOne({
      _id: id,
    });

    return res.status(200).json({
      status: true,
      message: `record deleted`,
    });
  } catch (error) {
    res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

// exporting controller functions
module.exports = {
  adduser,
  getusers,
  getuserByid,
  getuserByEmail,
  updateUser,
  deleteUser,
};
