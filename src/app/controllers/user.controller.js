const { User } = require('../models/user.model')

const adduser = async (req, res) => {
    try {

        const { username, password, email } = req.body

        const response = await User.create({
            username,
            password,
            email
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

const getusers = async (req, res) => {
    try {
           
        const response = await User.find();

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

const getuserByid = async (req, res) => {
    try {
        const id =  req.params.id;
        const response = await User.findById({
           _id : id,
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

const getuserByEmail = async (req, res) => {
    try {

        const email = req.params.email
        const response = await User.findOne({
            email: email,
        });

        return res.status(200).json({
            statu: true,
            response: response
        })
    } catch(error) {
        res.status(200).json({
            status: true,
            error: error.message
        })
    }
}

const updateUser = async ( req, res) => {
    try {
        const id = req.params.id;

        const updateObj = req.body

    await User.updateOne({ _id : id}, { $set: updateObj});

    const response = await User.find({ _id : id });

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

const deleteUser = async (req, res) => {
    try {

        const id = req.params.id;

        await User.deleteOne({
            _id: id
        })

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
    adduser,
    getusers,
    getuserByid,
    getuserByEmail,
    updateUser,
    deleteUser
}