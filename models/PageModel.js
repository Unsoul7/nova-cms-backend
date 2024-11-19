const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

const pageModel = new mongoose.Schema({
    title: String,
    permalink: String,
    code: String,
    site : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Site'
    },
    visibility : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Page',pageModel)