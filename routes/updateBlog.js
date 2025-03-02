const express = require('express')
const router = express.Router()
const { connection } = require('../database/db')

router.use(express.json())

router.put('/posts/:id', (req,res)=>{
    console.log('welcome to put');
    const today = new Date();
    // get user input
    const blog = req.body

    const query = `
        UPDATE blog_posts
        SET blog_title = ?, blog_content = ?, blog_category = ?, blog_tags = ?, blog_updateAt = ?
        WHERE blog_id = ?;
    `;
    connection.query(query, [blog.title, blog.content, blog.category, blog.tags, today, req.params.id], (err, rows, fields) => {
        if (err) {
            res.status(400).json(err)
        } else if (rows.affectedRows === 0) {
            res.status(404).json(`The ID wasn't found ${err}`)
        } else {
            console.log(rows)
            res.json(req.body)
        }
    })
})

module.exports = router;