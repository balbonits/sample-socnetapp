var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social', function () {
  console.log('mongodb/social connected');
});
module.exports = mongoose;
