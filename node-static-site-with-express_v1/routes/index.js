const express = require('express');
const router = express.Router();

const { projects } = require('../data/data.json');
//Index page route
router.get('/', (req, res) => {
  res.render('index', {projects});
});

//About page route
router.get('/about', (req, res) => {
  res.render('about')
})

//routes
router.get('/project/:id', (req, res, next) => {
  const {id} = req.params; //saving named route parameter in id object variable
  if (projects[id]) { //If the projects json file has a project that corresponds to the id number in the array then render the /project pug file to the dom with the json data file to define local variables
    const project = projects[id];
    res.render('project', {project});
  } else { //else, if there is no project that exists with a given id, display an error message.
    next()
  }
})

//404 error handler - this will trigger when someone attempt to explore a route which does not exist.
router.use((req, res, next) => {
  const err = new Error('404')
  err.message = 'Could not find the page you were looking for.'
  err.status = 404
  console.log('There was an error retrieving requeted resource.', `Error: ${err.status}`);
  res.render('notfound', {err})
});


//this error handler will react to server errors
router.use((err, req, res, next) => {
  if (err) {
    console.log('Global error handler called', err)
  }
  if (err.status === 404) {
    err.status(404).render('notfound', {err})
  } else {
    err.message = err.message || 'Whoops there was an error'
    err.status = err.status || 500
    res.render('error', {err})
  }
})



module.exports = router //exporting these routes to be used in other config files via importing
