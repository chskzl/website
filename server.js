var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/chasekozol.dev/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/chasekozol.dev/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/chasekozol.dev/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
}

// redirect to https
app.enable('trust proxy');
app.use((req, res, next) => {
	req.secure ? next() : res.redirect('https://chasekozol.dev' + req.url)
})

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
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, ()=>{});
httpsServer.listen(443, ()=>{});
