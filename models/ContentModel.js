const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

const contentModel = new mongoose.Schema({
    title: String,
    permalink: String,
    description: String,
    code: String,
    keywords : [{type : String}],
    labels : [{type : String}],
    site : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Site'
    },
    datacreated : {
        type : Date,
        default : Date.now
    },
    visibility : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Content',contentModel)