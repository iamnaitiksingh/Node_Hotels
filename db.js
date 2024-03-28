//                           Days => 5

const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/hotels";

// Set up MongoDB connection

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// define event listener foe database connections
db.on("connected", () => {
  console.log(" connected to MongoDB server");
});

db.on("error", () => {
  console.log("MongoDB  connected error", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//   export the database connection
module.exports = db;
