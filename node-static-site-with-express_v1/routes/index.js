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
    const error = new Error();
    error.status = 404;
    error.message = `The project you've requested does not exist! This error is known as a ${error.status} error.`
    next(error.message);
  }
})



module.exports = router //exporting these routes to be used in other config files via importing
