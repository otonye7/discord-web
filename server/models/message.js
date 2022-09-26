const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String
    },
    date: {
        type: String
    },
    type: {
        type: String
    }
})

module.exports = Message = mongoose.model("Message", messageSchema)