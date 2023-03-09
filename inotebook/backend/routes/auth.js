const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a user using: POST "/api/auth/" Doesn't require Auth
router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 charachters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // f there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user this email exists already
    // try {
    let user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      return req
        .status(400)
        .json({ error: "Sorry a user with this email already exists" });
    }
    // Create a user
    user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    //   .then(user => res.json(user)).catch(err => {console.log(err)
    // res.json({error: "Please enter a unique value for email", message: err.message})})
    res.json(user);
  }
  // } catch (error) {
  //   console.error(error.message);
  //   res.status(500).send("Some error occured");
  // }
  // }
);

module.exports = router;
