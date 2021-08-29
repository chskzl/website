const path = require('path');

var router = require('express').Router();
var photoData = require('../../photoData');
var stylesheet = 'photos.css';
var script = '';

router.get('/photos', function(req, res) {
    var listURL = [{name: 'photos', url: '/photos'}]
    res.status(200);
    res.render('photos', {photosArray: photoData, listURL: listURL, stylesheet: stylesheet, script: script});
});

module.exports = router;