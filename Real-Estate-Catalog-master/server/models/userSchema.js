// The require('mongoose') statement is importing the Mongoose library, which is a popular MongoDB object modeling tool for Node.js.
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// The userSchema variable is a Mongoose schema that defines the structure of a user document in MongoDB.
const userSchema = new mongoose.Schema({
    // It has four fields: email, password, userId, and name.
    // email is of type String, is required, and must be unique.
    email: {
        type: String,
        required: true,
        unique : true
    },
    // password is of type String and is required.
    password: {
        type: String,
        required: true
    },
    // userId and name are of type String.
    userId: {
        type: String
    },
    name: {
        type: String
    }
})
// The mongoose.model("Users", userSchema) statement creates a Mongoose model named "Users" based on the userSchema. This model will be used to interact with the MongoDB collection named "Users".
// const User = mongoose.model("Users", userSchema);
module.exports = mongoose.model("Users", userSchema);