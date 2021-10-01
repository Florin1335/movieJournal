const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const auth = require("./routes/authentication.js");
const userActions = require("./routes/userActions.js");
const userInfos = require("./routes/userInfos.js");
const path = require("path");

mongoose
  .connect(process.env.MONGODB_ATLAS_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas.");
  })
  .catch((err) => {
    console.log(err.message);
  });

const PORT = process.env.PORT || 3001;
const server = express();
server.use(express.static(path.join(__dirname, "../frontend", "build")));
server.use(express.json());

// Routes middleware
server.use("/api", auth);
server.use("/api", userActions);
server.use("/api", userInfos);

// Frontend

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});

server.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log("Listening on port " + PORT);
});
