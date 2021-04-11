const express = require('express')
const app = express()
const PORT = 3000
const route = require('./routes/index')
require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(route)
app.listen(PORT, () => {
    console.log(`Application is listening on http://localhost:${PORT}`);
})