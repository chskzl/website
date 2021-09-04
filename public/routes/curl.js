const path = require('path');

var router = require('express').Router();

router.get('/curl', function(req, res) {
    res.sendFile('curl.html', {root: path.join(__dirname, '../')}, function (err) {
        if (err) {
          console.log('error')
        }
    })
});

module.exports = router;