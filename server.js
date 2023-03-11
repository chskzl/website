var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

// work from public directory
app.locals.basedir = '/home/chase/Documents/website/public';

var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/public/views');

app.use(express.static('public'));
// need this to parse json in body of contact post request
app.use(express.json());

// routes
var routes = require('require-dir')('public/routes');
for (var i in routes) app.use('/', routes[i]);

const httpServer = http.createServer(app);

httpServer.listen(8080, ()=>{});
