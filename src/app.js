const express = require('express')
const app = express()

const port = process.env.port || 3000
// get the user input from postman
app.use(express.json())

app.get('/', (req, res) => {
    res.send('welcome to my blog')
})


// https://roadmap.sh/projects/blogging-platform-api 

app.listen(port, () => {
    console.log(`listening on port: http://localhost:${port}`);
})

// linking my routes 
const getBlogs = require('../routes/getBlogs')
const postBlog = require('../routes/postBlog')
const updateBlog = require('../routes/updateBlog')
const deleteBlog = require('../routes/deleteBlogs')
app.use('/', getBlogs)
app.use('/', postBlog)
app.use('/', updateBlog)
app.use('/', deleteBlog)