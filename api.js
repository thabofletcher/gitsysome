var http = require('http');
var https = require('https');
var etsy = require('./etsy.js')

var fb = require('firebase');
var gitsysome = new fb('https://gitsysome.firebaseio.com/');

var gitHubRequest = 'https://api.github.com/users/scottksmith95/following?client_id=4a2d644b7f9d802c9c76&client_secret=1cffdbbaabad93c1ba6f3d6e55ecbac170b71678';

exports.post = function(req, res) {
  var gitHubUsername = req.body.userName;

  getGitHub(res);
}

var getGitHub = function() {
};

exports.test = function(req, res) {
	etsy.getMatch('thabofletcher');
}
