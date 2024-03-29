
//                                Days => 5

const mongoose = require("mongoose");

// define the person schema

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    require: true,
  },

  mobile: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },

  adress: {
    type: String,
  },
 
  salary: {
    type: Number,
    require: true,
  },
});

// Create person model

const Person = mongoose.model("Person", personSchema);
module.exports = Person;



 