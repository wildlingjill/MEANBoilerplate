var mongoose = require('mongoose');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll');

module.exports = {

	login: function(req,res){
		User.findOne({name: req.body.name}, function(err, data){
			if(err){
				console.log(err);
				res.json(err);
			} else if (!data){
				var user = new User({name: req.body.name});
				user.save(function(err, data){
					if(err){
						console.log(err);
						res.json(err);
					} else {
						console.log(data);
						req.session.username = req.body.name;
						res.json(data);
					}
				})
			} else {
				console.log(data);
				req.session.username = req.body.name;
				res.json(data);
			}
		})
	}
}

