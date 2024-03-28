const express = require('express');
const router = express.Router();
const MenuItems = require("./../Menu");

// router.get("/", function (req, res) {
//     res.send("Welcome to my hotel... How i can    help you ?");
//   });
  
  
  
  // POST Method to add a Menu
  
  router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuItems(data);
      const response = await newMenu.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error 1" });
    }
  });
  
  // GET Method to Get the  Menu Items
  
  router.get("/", async (req, res) => {
    try {
      const data = await MenuItems.find();
      console.log("data fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server Error" });
    }
  });


  // comment added
  module.exports = router;