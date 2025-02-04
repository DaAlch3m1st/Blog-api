const express = require("express")
const router = express.Router()

router.get("/login", function (req, res) {
    console.log("running the login route")
    res.render("login")
});
  
module.exports = router