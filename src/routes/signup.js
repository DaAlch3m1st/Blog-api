const express = require("express");
const router = express.Router()

router.get("/signup", function (req, res) {
    console.log("running the signup route")
    res.render("signup")
});
  
module.exports = router