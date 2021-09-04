const path = require('path');
var db = require('../../database')
var router = require('express').Router();
var stylesheet = 'photos.css';
var script = '';

router.get('/photos', function(req, res) {
    var listURL = [{name: 'photos', url: '/photos'}]
    var sql = 'SELECT filename, title, to_char(date, \'YYYY.MM.DD\') AS date FROM images';
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            res.status(200);
            res.render('photos', {photosArray: data.rows, listURL: listURL, stylesheet: stylesheet, script: script});
        }
    })
});

module.exports = router;