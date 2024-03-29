//                           Days => 5

const mongoose = require("mongoose");

require('dotenv').config();

// const mongoURL = "mongodb://localhost:27017/hotels";
// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL;

// tLoVixGeK1orXMtm
// Set up MongoDB connection

mongoose.connect(mongoURL);

// const db = mongoose.connection;

const db = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to the MongoDB database");
  } catch (error) {
    console.log(`Error in connecting to the Database:`, error);
  }
};


// define event listener foe database connections

// db.on("connected", () => {
//   console.log(" connected to MongoDB server");
// });

// db.on("error", (err) => {
//   console.log("MongoDB  connected error", err);
// });

// db.on("disconnected", () => {
//   console.log("MongoDB disconnected");
// });

//   export the database connection

db()
module.exports = db;
