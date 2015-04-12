// modules
var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');

// instantiations and configs
var app = express();
app.use(bodyParser.json());


// routers/controllers
app.use('/api/posts',require('./controllers/api/posts'));
app.use(require('./controllers/static'));
app.use(require('./rest/auth'));


app.listen(3000, function () {
  console.log('Server listening on', 3000);
});
