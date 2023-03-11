const path = require('path');
var useragent = require('express-useragent');

var router = require('express').Router();

router.get('/', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../')}, function (err) {
    if (err) {
      console.log('error');
    }
  })
});

module.exports = router;