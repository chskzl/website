const path = require('path');

var router = require('express').Router();

router.get('/cv', function(req, res) {
    res.sendFile('cv.pdf', {root: path.join(__dirname, '../')}, function (err) {
        if (err) {
          console.log('error')
        } else {
          console.log('bruh')
        }
    })
});

module.exports = router;