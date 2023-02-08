const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
    title: String,
    body: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Blog",blogSchema);