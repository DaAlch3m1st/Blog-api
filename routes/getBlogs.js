const express = require('express')
const router = express.Router()
const { connection } = require('../database/db')

router.use(express.json())

// Get ALL the posts
router.get('/posts', (req,res)=>{
    const filterBlog = req.query
    const queryForAllBlogs = `
    SELECT * FROM blog_posts
    `
    const queryForKeyTerms = `
    SELECT *
    FROM blog_posts
    WHERE blog_category = ?
    `
    // Statement "if" to get the columns by term
        if (Object.keys(filterBlog).length >= 1) {
            connection.query(queryForKeyTerms, [filterBlog.term], (err,rows,fields)=>{
                if (err) {
                    res.status(400).json(err)
                } else if (rows.length <= 0) {
                    res.status(404).send()
                } else {
                    res.status(200).json(rows)
                }
            })
    // Statement to get ALL the blogs
        } else if (Object.keys(filterBlog).length === 0) {
            connection.query(queryForAllBlogs, (err,rows,fields)=>{
                if (err) {
                    res.status(404).json(err)
                } else {
                    res.status(200).json(rows)
                }
        })
    }
})


// I will get the column values according to the id from the database
router.get('/posts/:id', (req, res) => {
    const query = `
        SELECT *
        FROM blog_posts
        WHERE blog_id = ?
    `
    connection.query(query, [req.params.id], (err,rows,fields)=>{
        if (err || rows.length === 0) {
            res.status(404).json(err)
        } else {
            console.log(rows)
            res.json(rows)
        }
    })
})

module.exports = router;