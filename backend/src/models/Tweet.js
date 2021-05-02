const mongoose = require('mongoose');

const TtweetSchema = new mongoose.Schema({
    author: String,
    conetent: String,
    likes: {
        type: Number,
        default: 0,
    },
    createtedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Tweet", TtweetSchema);