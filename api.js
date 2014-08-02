var http = require('http');
var https = require('https');

var fb = require('firebase');
var cojack = new fb('https://cojack.firebaseio.com/');
//chats.auth('5V0BdAPl4cUicwHGCTy45O4gNBPjWkZ8bp3FmgyV');

var gitHubRequest = 'https://api.github.com/users/scottksmith95/following?client_id=4a2d644b7f9d802c9c76&client_secret=1cffdbbaabad93c1ba6f3d6e55ecbac170b71678';


exports.post = function(req, res) {
  var gitHubUsername = req.body.userName;

  getGitHub(res);
}

var getGitHub = function() {
};