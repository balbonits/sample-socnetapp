var express = require('express');
var path = require('path');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));

router.get('/', function (req, res) {
	// solution - http://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
	res.sendFile(path.join(__dirname, '../layouts', 'app.html'));
});

module.exports = router;
