const express = require('express'); //importing express
const app = express();

// const router = express.Router();
app.set('view engine', 'pug') //setting PUG for templating
app.use('/static', express.static('public')); //setting the public folder as static to be referenced throughout this app
const routes = require('./routes') //routes are set up in a seperate folder, here i'm importing the routes from that file

app.use(routes); //Here I'm getting express to use the routes i've created.



app.listen(3000, () => { //Using port 3000 to run this project and logging a message to the console to confirm so.
  console.log('The application is running localhost:3000')
});
