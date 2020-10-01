const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()
require('./src/config/db.config')

app.use( bodyParser.urlencoded({ extended: false }))

app.use( bodyParser.json())

app.use(cors())

require('./src/app/routes/user.route')(app);
require('./src/app/routes/product.route')(app);

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`server runningon port ${port}`)
})

app.get('/', (req, res) => {
    res.send({
        status: true,
        message: `welcome to home page`
    })
})





