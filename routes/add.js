var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	jName = req.query.name;
	jDescription = req.query.description;
	jImage = "http://lorempixel.com/400/400/people/";

	res.render('add', data.friends.push(
	{
		name: jName,
		description: jDescription,
		imageURL: jImage

	}));
};
 