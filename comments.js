//Create web server
const express = require('express');
const app = express();
const port = 3000;
const comments = require('./comments');

//Route to handle comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

//Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});