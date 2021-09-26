const express = require("express");
const userInfos = express.Router();
const protection = require("./protection.js");
const user = require("../mongodb_schemas/user.js");

userInfos.use(protection);

userInfos.get("/infos", async (req, res) => {
  const User = await user.findById(req.decoded.id);
  if (User) {
    let response = {
      email: User.email,
      name: User.name,
      date: User.date,
      wishlistCount: Object.keys(User.wishlist).length,
      historyCount: Object.keys(User.history).length,
    };
    res.json(response);
  } else res.status(404).json("User not found.");
});

userInfos.get("/wishlist", async (req, res) => {
  const User = await user.findById(req.decoded.id);
  if (User) {
    res.json(User.wishlist);
  } else res.status(404).json("User not found.");
});

userInfos.get("/history", async (req, res) => {
  const User = await user.findById(req.decoded.id);
  if (User) {
    res.json(User.history);
  } else res.status(404).json("User not found.");
});

module.exports = userInfos;
