const express = require('express')
const app = express()
const port = 3000

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