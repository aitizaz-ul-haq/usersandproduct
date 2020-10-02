// including bridge model
const { Bridge } = require("../models/bridge.model");
const { User } = require('../models/user.model');
const { Product } = require('../models/product.model');

const { SUCCESS, NOTFOUND } = require('../../constants/response.constant');

// Add bridged data to db
const addBridgeData = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const response = await Bridge.create({
      userId: userId,
      productId: productId,
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


const getUserProducts = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await Bridge.find({ userId: userId }).lean();

    if (user.length > 0) {

      let anArr = [];

      user.forEach(e => {
        anArr.push(e.productId);
      })

      const userData = await User.findOne({ _id: userId }).lean();

      const productsData = await Product.find({ _id: { $in: anArr } }).lean();

      const response = { user: userData, products: productsData };

      SUCCESS(res, response);

    } else {
      NOTFOUND(res);
    }

  } catch (error) {
    next(error);
  }
}

// export model
module.exports = {
  addBridgeData,
  getUserProducts
};
