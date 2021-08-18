const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, ref: 'user' },
    text: String,
    hashtag: String,
    date: { type: Date, default: Date.now },
    status: Boolean,
});

const post = mongoose.model('post', postSchema);

module.exports = post;