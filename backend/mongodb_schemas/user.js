const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "Exista deja"],
    lowercase: true,
    trim: true,
    minlength: 3,
    maxlength: 32,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 16,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password is too short."],
    maxlength: [128, "Password is too long."],
  },
  date: {
    type: String,
    default: new Date().toLocaleString(),
  },
  wishlist: {
    type: Object,
    default: {},
  },
  history: {
    type: Object,
    default: {},
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
