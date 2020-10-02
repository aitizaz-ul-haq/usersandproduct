// adding dependencies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// adding data configuration and enviroment file
require('dotenv').config()
require('./src/config/db.config')

// bodyparser urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// bodyparser json
app.use(bodyParser.json())

// adding cors
app.use(cors())


// import all routes at once 

require('./src/utils/route.utils')(app);

// creating default port
const port = process.env.PORT || 4000;



// running server
app.listen(port, () => {
    console.log(`server is live on port ${port}`)
})

// creating homepage
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: `welcome to home page`
    })
})


require('./src/utils/error-handler.utils')(app);





