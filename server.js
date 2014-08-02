var fs = require('fs');
var http = require('http');
var https = require('https');
var bodyparser = require('body-parser');

var privateKey  = fs.readFileSync('server.key', 'utf8');
var certificate = fs.readFileSync('server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var express = require('express');
var app = express();

app.use(bodyparser.urlencoded({
  extended: true
}));

app.get('/api', require('./api.js').post)
app.post('/api', require('./api.js').post)
app.get('/test', require('./api.js').test)
app.use('/', express.static(__dirname + '/pub'))

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
//httpsServer.listen(443);
