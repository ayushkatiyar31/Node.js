const mongoose = require('mongoose');


async function main() {

 await mongoose.connect("mongodb+srv://ayushkatiyar:Ayush%40123@codingadda.y7en9oe.mongodb.net/BookStore");
 
// Create a Model === Create a collection(Create a table)
 

// Create a Document === Create a object

const user1 = new User({name:"Ayush", age:21, city:"Lucknow",gender:"Male"});
await user1.save();


}
main()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log("Error"));