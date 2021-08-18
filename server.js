var express = require('express');
var app = express();
var exphbs = require('express-handlebars');


app.use(express.json());

app.locals.basedir = '/home/chase/Documents/website/public';
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/public/views');

app.use(express.static('public'));

var routes = require('require-dir')('public/routes');
for (var i in routes) app.use('/', routes[i]);

server = app.listen(80, function() {});

server.timeout = 240000;