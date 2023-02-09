const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    image: {
        name: String,
        mimetype: String,
        size: Number
    }
},{
   timestamps: true
})

module.exports = mongoose.model("Users",userSchema);