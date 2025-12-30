const mongoose = require('mongoose');
 

async function main() {

 await mongoose.connect("mongodb+srv://ayushkatiyar:Ayush%40123@codingadda.y7en9oe.mongodb.net/Instagram");
 
}
module.exports = main;