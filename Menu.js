const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },
  taste: {
    type: String,
    enum: ["sweet","spicy,", "sour"],
    require: true,
  },

  is_drink: {
    type: Boolean,
    default: false,
  },
  ingrediants: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

const MenuItems = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItems;
