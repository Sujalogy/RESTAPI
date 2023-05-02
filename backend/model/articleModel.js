const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    name: {type : String, required : true},
    email: {type : String, required : true},
    password: {type : String, required : true},
    city: {type : String, required : true},
    age: {type : Number, required : true}
})

const ArticleModel = mongoose.model(user, userSchema);

module.exports = {
    ArticleModel
}