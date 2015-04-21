// modules
var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');
var _ = require('lodash');
var bcrypt = require('bcrypt');

// instantiations and configs
var app = express();
// var User = require('./user');
app.use(bodyParser.json());

var users = [{username:'dickeyxxx',password:'$2a$10$Jmo/n32ofSM9JvzfH0z6Me6TMyn6C/U9JhzDG8xhQC4ExHMG1jXz2'}];
var secretKey = 'supersecretkey';

// routers/controllers
app.use(require('./controllers/static'));
app.use(require('./auth'));
app.use('/api/posts',require('./controllers/api/posts'));
app.use('/api/sessions',require('./controllers/api/sessions'));
app.use('/api/users',require('./controllers/api/users'));

// functions
function findUserByUsername(username){
	return _.find(users, {username:username});
}

function validateUser(user,password,cb){
	bcrypt.compareSync(password,user.password,cb);
}



app.listen(3000);