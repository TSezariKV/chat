const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Chat = mongoose.model('Chat', chatSchema)
module.exports = Chat