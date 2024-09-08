const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }).then(console.log("Database connected succesfully"))
    .catch(err => console.log({message:err.message}))
}

module.exports = connectDB;