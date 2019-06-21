const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        default: 0,
        type: Number
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);