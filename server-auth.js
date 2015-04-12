// modules
var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');
var _ = require('lodash');

// instantiations and configs
var app = express();
app.use(bodyParser.json());

var users = [{username:'dickeyxxx',password:'pass'}];
var secretKey = 'supersecretkey';

// functions
function findUserByUsername(username){
	return _.find(users, {username:username});
}

// routers/controllers
app.use('/api/posts',require('./controllers/api/posts'));
app.use(require('./controllers/static'));


app.post('/session',function(req,res){
	var username = req.body.username;
	//TODO: Validate password
	var token = jwt.encode({username: username},secretKey);
	res.json(token);
});

app.get('/user',function(req,res){
	var token = req.headers['x-auth'];
	var user = jwt.decode(token,secretKey);
	//TODO: pull user from MongoDB
	res.json(user);
});

app.listen(3000, function () {
  console.log('Server listening on', 3000);
});
