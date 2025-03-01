const express = require('express')
const { connection } = require('../database/db')
const app = express()

const port = process.env.port || 3000
// get the user input from postman
app.use(express.json())

app.get('/', (req, res) => {
    res.send('welcome to my blog')
})

// I will get all the post from the database
app.get('/posts', (req, res) => {
    connection.query("SELECT * FROM blog_posts", (err,rows,fields)=>{
        res.json(rows)
    })
})

// https://roadmap.sh/projects/blogging-platform-api 

app.listen(port, () => {
    console.log(`listening on port: http://localhost:${port}`);
})

// linking my routes 
const postBlog = require('../routes/postBlog')
app.use('/', postBlog);