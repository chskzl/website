const path = require('path/posix');

var router = require('express').Router();
var photoData = require('../../photoData');
var stylesheet = 'photo.css';
var script = '';

router.get('/photos/:n', function(req, res) {
    var n = req.params.n;
	if (n >= 0 && n < photoData.length) {
        var listURL = [{name: 'photos', url: '/photos'}, {name: photoData[n].filename, url: '/photos/'+n}]
        res.status(200);
        res.render('photo', {filename: photoData[n].filename, title: photoData[n].title, date: photoData[n].date, listURL: listURL, stylesheet: stylesheet, script: script});
    }
});

module.exports = router;