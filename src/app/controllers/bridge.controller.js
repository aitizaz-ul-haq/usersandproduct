const { response } = require('express');
// including bridge model
const { Bridge } = require('../models/bridge.model')

// Add bridged data to db
const addBridgeData = async (req, res) => {
    try {

        const { username, productchoice, userid, productid } = req.body

        const response = await Bridge.create({
            username,
            productchoice,
            userid,
            productid
        });

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

module.exports = {
    addBridgeData
}