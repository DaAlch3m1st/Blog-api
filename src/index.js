const express = require('express')
const app = express()
const bodyparser = require('body-parser')
require("dotenv").config()
const port = 3000

// Body-parser middleware
 // Extende accept nested data in json
app.use(bodyparser.urlencoded({ extended: true }))
 // transform the data into json
app.use(bodyparser.json())

app.set('view engine', 'ejs');

app.use(express.static('views'))
app.use(express.static('styles'))

app.get('/', (req, res) => {
  res.render('index')
})

// linking my routes
const signupRouter = require('./routes/signup');
const loginUser = require('./routes/login');

app.use('/', signupRouter);
app.use('/', loginUser);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})