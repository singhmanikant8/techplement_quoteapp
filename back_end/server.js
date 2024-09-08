//creating own server
const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for quote
const quoteRoutes = require("./routes/quote");

//mounting quote api routes
app.use("/api/v1",quoteRoutes);

//starting the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//connect the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>Backend is in progress</h1>`);
})