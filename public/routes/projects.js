const path = require('path');

var router = require('express').Router();

router.get('/projects', function(req, res) {
    res.sendFile('projects.html', {root: path.join(__dirname, '../')}, function (err) {
        if (err) {
          console.log(err)
        }
    })
});

module.exports = router;