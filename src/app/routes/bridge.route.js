// exporting bridge routes
module.exports = (app) => {
    const {
        addBridgeData,
        getUserProducts
    } = require('../controllers/bridge.controller')

    app.post('/bridge', addBridgeData);
    app.get('/user/products/:userId', getUserProducts);
}