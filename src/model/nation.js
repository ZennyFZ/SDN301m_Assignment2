const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nationSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    },
}, { timestamps: true })

const Nations = mongoose.model('Nations', nationSchema)
module.exports = Nations