const mongoose = require('mongoose');
const { Schema } = mongoose;



// Create a Model === Create a collection(Create a table)

const userSchema = new Schema({
    name:String,
    age: Number,
    city:String,
    gender: String
})

const User = mongoose.model("user",userSchema);

module.exports = User;