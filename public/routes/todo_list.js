const path = require('path');

var router = require('express').Router();

router.get('/todo/list', function(req, res) {
    res.sendFile('todo.txt', {root: path.join(__dirname, '../')}, function (err) {
        if (err) {
          console.log('error')
        }
    })
});

module.exports = router;