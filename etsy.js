
var Etsy = require('etsy').Etsy;
var api = new Etsy('20dq535j4h6pc5qdbpqnqed4', 'fahr27dspe'); 


exports.getMatch = function(ghName) {
	api.findAllUsers({
	    keywords: 'a',
	}, function(err, users) {
	    console.log(users.results[0]);
	});	
}
