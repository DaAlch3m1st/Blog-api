const express = require('express')
const router = express.Router()
const { connection } = require('../database/db')

router.use(express.json())

router.delete('/posts/:id', (req,res)=>{
    const query = `
    DELETE FROM blog_posts
    WHERE blog_id = ?;
`; 
    connection.query(query, [req.params.id], (err,rows,fields)=>{
        console.log(rows)
        if (err) {
            res.status(400).json(err)
        } else if (rows.affectedRows === 0) {
            res.status(404).json(`The ID wasn't found, we can't delete your blog`)
        } else if (rows.affectedRows >= 1){
            res.status(204).send()
        }
    })
})

module.exports = router;