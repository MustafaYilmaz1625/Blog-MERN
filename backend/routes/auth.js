const router = require("express").Router();
const User = require("../models/User");

//register
router.post("/register", async (req, res) => {
  try {
    const { fullName, username, email, password, bio, profilePicture } =
      req.body;

   

    const newUser = new User({
      fullName,
      username,
      email,
      password,
      bio,
      profilePicture,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;