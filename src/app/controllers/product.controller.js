// adding product model to product cotroller
const { Product } = require('../models/product.model')


// Add a product
const addProduct = async (req, res) => {
    try {
        const { productName, productCatagory} = req.body

        const response = await Product.create({
            productName,
            productCatagory
        })

        res.status(200).json({
            status: true,
            data: response
        })

    } catch (error) {
        res.status(200).json({
            status: false,
            error: error.message
        })
    }
}

// get all product from db
const getProduct = async (req, res) => {
    try {

        const response = await Product.find()

        return res.status(200).json({
            status: true,
            data: response
        })

    } catch(error) {
        res.status(200).json({
            status: false,
            error: error.message
        })
    }
}

// update a product information in db
const updateProductInfo = async (req, res) => {
    try { 
        const id = req.params.id;

        const updateObject = req.body;

        await Product.updateOne({_id: id}, {$set: updateObject});

        const response = await Product.findOne({ _id: id });

        return res.status(200).json({
            status: true,
            data: response
        })

    } catch(error) {
        res.status(200).json({
            status: true,
            error: error.message
        })
    }
}

// get product in db with product id
const getproductByID = async (req, res) => {
    try { 
        const id = req.params.id;

        const response = await Product.findById({
            _id : id
        })

        return res.status(200).json({
            status: true,
            data: response
        })

    } catch(error) {

        res.status(200).json({
            status: false,
            error: error.message

        })

    }
}

// delete a product saved in db
const deleteProduct = async (req, res) => {
    try {

        const id = req.params.id;
        await Product.deleteOne({ _id: id});

        return res.status(200).json({
            status: true,
            message: `record deleted`
        })

    } catch(error) {
        res.status(200).json({
            status: false,
            error: error.message
        })
    }
}

// exporting  controller functions
module.exports = {
    addProduct,
    getProduct,
    getproductByID,
    updateProductInfo,
    deleteProduct
}