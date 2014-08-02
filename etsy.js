var req = require('request')

// var Etsy = require('etsy').Etsy;
// var api = new Etsy('20dq535j4h6pc5qdbpqnqed4', 'fahr27dspe'); 

exports.getMatch = function(ghName, cb) {

	req.get('https://openapi.etsy.com/v2/users?keywords=' + ghName + '&api_key=20dq535j4h6pc5qdbpqnqed4',function (error, response) {
	    if (!error && response.statusCode == 200) {

	    	var users = JSON.parse(response.body).results

	    	console.log(users)

	    	req.get('https://openapi.etsy.com/v2/users/' + users[0].user_id + '/profile?api_key=20dq535j4h6pc5qdbpqnqed4',function (error, response) {
	    		cb(JSON.parse(response.body))
	    	})
	    	
	    }
	})
	// req.get('https://openapi.etsy.com/v2/users/etsystore?api_key=your_api_key')


	// api.findAllUsers({
	//     keywords: 'a',
	// }, function(err, users) {
	//     console.log(users.results[0]);
	// });	
}
