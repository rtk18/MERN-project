const mongoose = require("mongoose");
const moment = require("moment");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please enter Name"],
  },
  quantity: {
    type: Number,
    min: [1, "Quantity must be greater than 0, got {VALUE}"],
    required: [true, "Please enter quantity"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative number for Amount"],
  },
  createdAt: {
    type: Date,
    default: moment().format("YYYY-MM-DD"),
  },
});

module.exports = mongoose.model("product", ProductSchema);
