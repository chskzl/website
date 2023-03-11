const path = require('path');

var router = require('express').Router();
var stylesheet = 'projects.css';
var script = 'projects.js';

router.get('/projects', function(req, res) {
    var listURL = [{name: 'projects', url: '/projects'}]
    res.status(200);
    res.render('projects', {listURL: listURL, stylesheet: stylesheet, script: script});
});

module.exports = router;