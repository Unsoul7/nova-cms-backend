const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
PORT = process.env.PORT || 8000
app.use(cors())

app.use('/auth/v1',require('./routes/auth'))

app.listen(PORT, () => console.log(`Server Started on ${PORT}`))
