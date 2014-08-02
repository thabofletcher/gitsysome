var http = require('http');
var https = require('https');

var fb = require('firebase');
var gitsysome = new fb('https://gitsysome.firebaseio.com/');

var etsy = require('./etsy.js')


exports.post = function(req, res) {
	etsy.getMatch('thabofletcher');
}