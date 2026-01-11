const mongoose = require('mongoose');
const User = require("./Models/users"); 

async function main() {

 await mongoose.connect(" ");
 
// Create a Model === Create a collection(Create a table)


// Create a Document === Create a object

const user1 = new User({name:"Ayush", age:21, city:"Lucknow",gender:"Male"});
await user1.save();

}

module.exports = main;