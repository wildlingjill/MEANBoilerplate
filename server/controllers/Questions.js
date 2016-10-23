var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');

module.exports = {

	index: function(req,res){
		Question.find({}, function(err, data){
			if(err){
				console.log(err);
				res.json(err);
			} else {
				console.log('successfully found questions');
				console.log(data);
				res.json(data);
			}
		});
	},


	create: function(req,res){
		var question = new Question({author: req.body.author, question: req.body.question, description: req.body.description});
		question.save(function(err, data){
			if(err){
				console.log(err);
				res.json(err);
			} else {
				console.log("Successfully added question");
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


	// delete: function(req,res){
	// 	console.log(req.params.question_id);
	// 	Question.findOne({_id: req.params.question_id}, function(err, data){
	// 		if(err){
	// 			console.log(err);
	// 			res.json(err);
	// 		} else {
	// 			if(data){
	// 				console.log(data);
	// 				Question.remove(data, function(err, data){
	// 					if(err){
	// 						console.log(err);
	// 						res.json(err);
	// 					} else {
	// 						console.log("Successfully removed question");
	// 						res.json(data);
	// 					}
	// 				})
	// 			} else {
	// 				console.log("No data found");
	// 			}
	// 		}
	// 	})
	// },


	show: function(req,res){
		Question.findOne({_id: req.params.question_id}).populate('answers').exec(function(err, data){
			if(err){
				console.log(err);
			} else {
				console.log(data);
				res.json(data);
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
