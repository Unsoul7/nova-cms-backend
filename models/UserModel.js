const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

const userModel = new mongoose.Schema({
    fullname : String,
    nickname : {
        type : String,
        unique : true
    },
    email : {
        type : String,
        unique : true
    },
    password : String,
    sites : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Site'
    }]
})

module.exports = mongoose.model('User',user)