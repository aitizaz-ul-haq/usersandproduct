// exporting bridge routes
module.exports = (app) => {
    const {
        addBridgeData
    } = require('../controllers/bridge.controller')

    app.post('/bridge', addBridgeData)
}