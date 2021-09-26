const express = require("express");
const user = require("../mongodb_schemas/user.js");
const protection = require("./protection.js");

const userActions = express.Router();

userActions.use(protection);

userActions.get("/wishlist/get/:imdbID", async (req, res) => {
  const currentUser = await user.findById(req.decoded.id);
  if (currentUser) {
    if (currentUser.wishlist && currentUser.wishlist[req.params.imdbID]) {
      const response =
        "You have added this movie on your wishlist on " +
        new Date(currentUser.wishlist[req.params.imdbID]).toLocaleString() +
        ".";
      res.json(response);
    } else res.status(404).json("This movie is not on your wishlist.");
  } else res.status(404).json("User not found.");
});

userActions.get("/wishlist/add/:imdbID", async (req, res) => {
  const currentUser = await user.findById(req.decoded.id);
  if (currentUser) {
    const id = req.params.imdbID;
    currentUser.wishlist = { ...currentUser.wishlist, [id]: Date.now() };
    await currentUser.save((err) => {
      if (err) res.status(400).json(err.message);
      else res.json("Movie added to wishlist successfully.");
    });
  } else res.status(404).json("User not found.");
});

userActions.delete("/wishlist/remove/:imdbID", async (req, res) => {
  const currentUser = await user.findById(req.decoded.id);
  if (currentUser) {
    const id = req.params.imdbID;
    if (currentUser.wishlist[id]) {
      delete currentUser.wishlist[id];
      currentUser.markModified("wishlist");
      await currentUser.save((err) => {
        if (err) res.status(400).json(err.message);
        else res.json("Movie removed successfully!");
      });
    } else res.status(404).json("Movie not found.");
  } else res.status(404).json("User not found.");
});

userActions.get("/history/get/:imdbID", async (req, res) => {
  const currentUser = await user.findById(req.decoded.id);
  if (currentUser) {
    if (currentUser.history && currentUser.history[req.params.imdbID]) {
      const response =
        "You have watched this movie on " +
        new Date(currentUser.history[req.params.imdbID]).toLocaleString() +
        ".";
      res.json(response);
    } else res.status(404).json("You have not watched this movie yet.");
  } else res.status(404).json("User not found.");
});

userActions.get("/history/add/:imdbID", async (req, res) => {
  const currentUser = await user.findById(req.decoded.id);
  if (currentUser) {
    const id = req.params.imdbID;
    currentUser.history = { ...currentUser.history, [id]: Date.now() };
    await currentUser.save((err) => {
      if (err) res.status(400).json(err.message);
      else res.json("Movie added to history successfully.");
    });
  } else res.status(404).json("User not found.");
});

userActions.delete("/history/remove/:imdbID", async (req, res) => {
  const currentUser = await user.findById(req.decoded.id);
  if (currentUser) {
    const id = req.params.imdbID;
    if (currentUser.history[id]) {
      delete currentUser.history[id];
      currentUser.markModified("history");
      await currentUser.save((err) => {
        if (err) res.status(400).json(err.message);
        else res.json("Movie removed successfully!");
      });
    } else res.status(404).json("Movie not found.");
  } else res.status(404).json("User not found.");
});

module.exports = userActions;
