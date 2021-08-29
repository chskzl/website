const path = require('path');

var router = require('express').Router();

router.get('/', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../')}, function (err) {
        if (err) {
          console.log('error')
        } else {
          console.log('bruh')
        }
    })
});

module.exports = router;