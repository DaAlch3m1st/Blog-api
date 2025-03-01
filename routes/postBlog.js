const express = require('express')
const router = express.Router()
const { connection } = require('../database/db')

router.use(express.json())
// this script will create new posts according to the input of the user
router.post('/posts', (req, res) => {
    const today = new Date();
    // get user input
    const blog = req.body
    // I insert the user input to the database
    const query = `
    INSERT INTO blog_posts (blog_title, blog_content, blog_category, blog_tags, blog_createdAt, blog_updateAt) 
    VALUES (?, ?, ?, ?, ?, ?);
    `;
    connection.query(query, [blog.title, blog.content, blog.category, blog.tags, today, today], (err, rows, fields) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(201).json(req.body)
            console.log(fields)
        }
    })
})

module.exports = router;