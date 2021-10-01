const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../mongodb_schemas/user.js");

const auth = express.Router();
const saltRounds = 10;

auth.post("/register", async (req, res) => {
  if (req.body.password) {
    if (req.body.password.length < 8)
      res.status(400).json("Password is too short.");
    else
      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {
          const newUser = new user({
            email: req.body.email,
            name: req.body.name,
            password: hash,
          });

          await newUser.save((err) => {
            if (err) {
              if (err.name === "MongoServerError" && err.code === 11000)
                res.status(400).json("Email address is already registered.");
              else res.status(400).json(err.message);
            } else res.json("Success!");
          });
        });
      });
  } else {
    res.status(400).json("Password is required.");
  }
});

auth.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    const exista = await user.findOne({ email: req.body.email });
    if (exista) {
      bcrypt.compare(req.body.password, exista.password, (err, result) => {
        if (err) {
          res.status(400).json(err.message);
        } else {
          if (result === true) {
            jwt.sign(
              { id: exista._id },
              process.env.JWT_SECRET,
              { expiresIn: "86400000ms" },
              (err, token) => {
                if (err) res.status(400).json(err.message);
                else {
                  res
                    .header("auth-token", token)
                    .json("Successfully logged in.");
                }
              }
            );
          } else {
            res.status(401).json("Incorrect password.");
          }
        }
      });
    } else {
      res.status(404).json("The email is not registered.");
    }
  } else res.status(400).json("Email and password are required.");
});

auth.get("/check", (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) res.json(false);
      else res.json(true);
    });
  } else {
    res.json(false);
  }
});

module.exports = auth;
