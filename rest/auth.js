var router = require('express').Router();
var jwt = require('jwt-simple');

var secretKey = 'supersecretkey';

router.post('/session',function(req,res){
	var username = req.body.username;
	//TODO: Validate password
	var token = jwt.encode({username: username},secretKey);
	res.json(token);
});

router.get('/user',function(req,res){
	var token = req.headers['x-auth'];
	var user = jwt.decode(token,secretKey);
	//TODO: pull user from MongoDB
	res.json(user);
});