module.exports = (app) => {
    const {
        adduser,
        getusers,
        getuserByid,
        getuserByEmail,
        updateUser,
        deleteUser
    } = require('../controllers/user.controller')

    app.post('/users', adduser)
    app.get('/users', getusers)
    app.get('/users/:id', getuserByid)
    app.get('/usersemail/:email', getuserByEmail)
    app.put('/users/:id', updateUser)
    app.delete('/userdelete/:id', deleteUser)
}