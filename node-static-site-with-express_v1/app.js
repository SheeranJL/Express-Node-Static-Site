const express = require('express');
const app = express();
const jsonData = require('./data.json')

app.set('view engine', 'pug')
express.static('/public')

//Index page route
app.get('/', (req, res) => {
  res.send("this is a test")
  console.log("one")
})

//About page route
app.get('/about', (req, res) => {
  res.send("this is a second test")
})


app.listen(3000);
