const path = require('path');

var router = require('express').Router();
var stylesheet = 'contact.css';
var script = 'contact.js';

router.get('/contact', function(req, res) {
    var listURL = [{name: 'contact', url: '/contact'}]
    res.status(200);
    res.render('contact', {listURL: listURL, stylesheet: stylesheet, script: script});
});

module.exports = router;