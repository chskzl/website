const path = require('path/posix');

var router = require('express').Router();

router.get('/photos', function(req, res) {
    res.sendFile('photos.html', {root: path.join(__dirname, '../')}, function (err) {
        if (err) {
          console.log('error')
        } else {
          console.log('bruh')
        }
    })
});

module.exports = router;