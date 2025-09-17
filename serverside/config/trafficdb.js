const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const connectdb = asyncHandler(async ()=> {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("✅ Connected to Database");
    } catch(err){
        console.error("❌ Failed to connect to Database:", err);
        process.exit(1);
    }
}) 

module.exports = connectdb;