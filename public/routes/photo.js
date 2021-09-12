const path = require('path');
var db = require('../../database')
var router = require('express').Router();
var stylesheet = 'photo.css';
var script = 'photo.js';

router.get('/photos/:n', function(req, res) {
    var n = req.params.n;
    var sql = 'SELECT filename, title, to_char(date, \'YYYY.MM.DD\') AS date FROM images ORDER BY date DESC;';
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
        }
        else if (n >= 0 && n < data.rows.length) {
            var listURL = [{name: 'photos', url: '/photos'}, {name: data.rows[n].filename, url: '/photos/'+n}]
            res.status(200);
            res.render('photo', {filename: data.rows[n].filename, title: data.rows[n].title, date: data.rows[n].date, listURL: listURL, stylesheet: stylesheet, script: script});
        }
    })
});

module.exports = router;