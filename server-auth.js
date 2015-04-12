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


// routers/controllers
app.use('/api/posts',require('./controllers/api/posts'));
app.use(require('./controllers/static'));


// functions
function findUserByUsername(username){
	return _.find(users, {username:username});
}

function validateUser(user,password){
	return user.password === password;
}


app.post('/session',function(req,res){
	var user = findUserByUsername(req.body.username);
	//TODO: Validate password
	if(!validateUser(user,req.body.password)) {
		return res.send(401); //Unauthorized
	}
	var token = jwt.encode({username:user.username},secretKey);
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
