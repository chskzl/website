const path = require('path');

var router = require('express').Router();

router.get('/cv', function(req, res) {
    res.sendFile('cv.pdf', {root: path.join(__dirname, '../')}, function (err) {
        if (err) {
          console.log(err)
        }
    })
});

module.exports = router;