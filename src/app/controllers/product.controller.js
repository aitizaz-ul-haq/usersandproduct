const { Product } = require('../models/product.model')
const { User } = require('../models/user.model')

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

module.exports = {
    addProduct,
    getProduct,
    getproductByID,
    updateProductInfo,
    deleteProduct
}