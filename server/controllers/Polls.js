var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var User = mongoose.model('User');

module.exports = {

	index: function(req,res){
		Poll.find({}, function(err, data){
			if(err){
				console.log(err);
				res.json(err);
			} else {
				console.log('successfully found polls');
				console.log(data);
				res.json(data);
			}
		});
	},


	create: function(req,res){
		var poll = new Poll({author: req.body.author, question: req.body.question, option1: req.body.option1, option2: req.body.option2, option3: req.body.option3, option4: req.body.option4, option1votes: 0, option2votes: 0, option3votes: 0, option4votes: 0});
		poll.save(function(err, data){
			if(err){
				console.log(err);
				res.json(err);
			} else {
				console.log("Successfully added poll");
				res.json(data);
			}
		})		
	},


	// update: function(req,res){
	// 	console.log(req.body.firstname);
	// 	console.log(req.body.lastname);
	// 	console.log(req.body.birthday);
	// 	Friend.findByIdAndUpdate({_id: req.params.id}, {$set: {name: {firstname: req.body.firstname, lastname: req.body.lastname}, birthday: req.body.birthday}}, function(err, friend){
	// 		if(err){
	// 			console.log(err);
	// 			res.json(err);
	// 		} else {
	// 			friend.save(function(err, data){
	// 				if(err){
	// 					console.log(err);
	// 					rea.json(err);
	// 				} else {
	// 					res.json(data);
	// 				}
	// 			})
	// 		}
	// 	});
		
	// },


	delete: function(req,res){
		console.log(req.params.poll_id);
		Poll.findOne({_id: req.params.poll_id}, function(err, data){
			if(err){
				console.log(err);
				res.json(err);
			} else {
				if(data){
					console.log(data);
					Poll.remove(data, function(err, data){
						if(err){
							console.log(err);
							res.json(err);
						} else {
							console.log("Successfully removed poll");
							res.json(data);
						}
					})
				} else {
					console.log("No data found");
				}
			}
		})
	},


	show: function(req,res){
		Poll.findOne({_id: req.params.poll_id}, function(err, data){
			if(err){
				console.log(err);
			} else {
				console.log(data);
				res.json(data);
			}
		})
	},

	vote: function(req, res){
		Poll.findOne({_id: req.params.poll_id}, function(err, poll){
			if(err){
				console.log(err);
			} else if (req.body.option === 1){
				poll.option1votes += 1;
				poll.save(function(err, data){
					if(err){
						console.log(err);
					} else {
						res.json(data);
					}
				});
			} else if (req.body.option === 2){
				poll.option2votes += 1;
				poll.save(function(err, data){
					if(err){
						console.log(err);
					} else {
						res.json(data);
					}
				});
			} else if (req.body.option === 3){
				poll.option3votes += 1;
				poll.save(function(err, data){
					if(err){
						console.log(err);
					} else {
						res.json(data);
					}
				});
			} else if (req.body.option === 4){
				poll.option4votes += 1;
				poll.save(function(err, data){
					if(err){
						console.log(err);
					} else {
						res.json(data);
					}
				});
			} else {
				console.log("Error:", req.body);
			}
		});
	}
}


// var mongoose = require('mongoose');
// var Post = mongoose.model('Post');


// module.exports = (function(){
// 	return {

// 		index: function(req,res){
// 			Post.find({}).populate('comments').exec(function(err, posts){
// 				console.log(posts);
// 				res.render('index', {posts: posts});
// 			});
// 		},

// 		create: function(req, res){
// 			var new_post = new Post(req.body);
// 			console.log(new_post);
// 			new_post.save(function(err, results){
// 				if (err){
// 					console.log(err);
// 					console.log("Something broke");
// 				} else {
// 					res.redirect('/');
// 				}
// 			});
// 		}

// 	}

// })();
