const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

const api = require('./server/routes/api.js');

// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// set up api routes
app.use('/api', api);

// return other routes to angular index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// set port
const port = process.env.PORT || '3000'
app.set('port', port);

// create http server
const server = http.createServer(app);
server.listen(port, () => console.log(`Runnin on localhost:${port}`));


// db.posts.insert(
//   {
//     title:'udacity', 
//     url:'https://www.udacity.com/', 
//     description:'great place to learn about python, and machine learning'
//   })
// db.posts.insert(
//   {
//     title:'udemy', 
//     url:'https://www.udemy.com/courses', 
//     description:'learn about many different technologies in video format'
//   })
// db.posts.insert(
//   {
//     title:'freecodecamp', 
//     url:'https://www.freecodecamp.com/', 
//     description:'learn javascript with great community free bootcamp style'
//   })
// db.posts.insert(
//   {
//     title:'codeschool', 
//     url:'https://www.codeschool.com/', 
//     description:'learn various technologies through online courses'
//   })
