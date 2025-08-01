const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel;