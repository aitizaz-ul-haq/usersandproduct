const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    productCatagory: {
        type: String,
        requier: true
    }
})

const Product = mongoose.model('product', productSchema)

module.exports = {
    Product
}