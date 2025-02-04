const express = require("express")
const router = express.Router()
const connection = require('../db')

router.get("/signup", function (req, res) {
    console.log("running the signup route")
    res.render("signup")
});

router.post("/signup", function (req, res) {
    const username = req.body.signupUsername
    const password = req.body.signupPassword
    console.log(`The username of the client is: ${username}`)
    console.log(`The password of the client is: ${password}`)

    connection.query(`INSERT INTO users (username, user_password) VALUES ("${username}", "${password}")`, (err, rows, fields) => {
        if (err) throw err

        console.log("Info sent to the database")
    })
})

module.exports = router