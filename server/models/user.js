const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    mail: {
        type: String,
        unique: true
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
}, { timestamps: true });

module.exports = User = mongoose.model("User", userSchema)