var http = require('http');
var https = require('https');
var etsy = require('./etsy.js');
var request = require('request');

var fb = require('firebase');
var gitsysome = new fb('https://gitsysome.firebaseio.com/');

exports.post = function(req, res) {
  var gitHubUsername = req.body.userName || 'scottksmith95';

  var gitHubRequest = 'https://api.github.com/users/' + gitHubUsername + '?client_id=4a2d644b7f9d802c9c76&client_secret=1cffdbbaabad93c1ba6f3d6e55ecbac170b71678'; 

  var options = {
      url: gitHubRequest,
      headers: {
          'User-Agent': 'Node app'
      }
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);


      var ghUser = JSON.parse(body)
      var go = {gh : ghUser}
      etsy.getMatch(ghUser.login, function(etsyobj) {
        go.etsy = etsyobj
        res.json(go)
      });

      
    }
  });
}
