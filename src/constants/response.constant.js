const SUCCESS = (res, data) => {
    return res.status(200).json({
        status: true,
        data: data
    });
}

const GETSUCCESS = (res, data) => {
    return res.status(200).json({
        status: true,
        lenght: data.length,
        data: data
    });
}

const AUTHSUCCESS = (res, data, token) => {
    return res.status(200).json({
        status: true,
        token: token,
        data: data
    });
}

const NOTFOUND = (res) => {
    return res.status(200).json({
        status: false,
        message: 'no record found'
    });
}

const CUSTOMRESPONSE = (res, msg) => {
    return res.status(200).json({
        status: true,
        message: msg
    });
}

module.exports = {
    SUCCESS,
    GETSUCCESS,
    AUTHSUCCESS,
    NOTFOUND,
    CUSTOMRESPONSE
}