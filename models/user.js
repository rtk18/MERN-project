const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null, required: [true, "Please enter first_name"], },
  last_name: { type: String, default: null,required: [true, "Please enter last_name"], },
  email: { type: String, unique: true,required: [true, "Please enter email"], },
  password: { type: String,required: [true, "Please enter password"], },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);
