var express = require('express');
var app = express();
app.disable('x-powered-by');


app.use(express.json());

app.locals.basedir = '/home/chase/Documents/website/public';

app.use(express.static('public'));

var routes = require('require-dir')('public/routes');
for (var i in routes) app.use('/', routes[i]);

server = app.listen(80, function() {});

server.timeout = 240000;