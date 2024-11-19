const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

const siteModel = new mongoose.Schema({
    title: String,
    address: {
        type : String,
        unique : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId
    },
    description: String,
    code: String,
    content : [{
        type : mongoose.Schema.Types.ObjectId,
        ref :"Content"
    }],
    pages : [{
        type : mongoose.Schema.Types.ObjectId,
        ref :"Page"
    }],
    favicon : String,
    media :[{type : String}]
    
})

module.exports = mongoose.model('Site',siteModel)