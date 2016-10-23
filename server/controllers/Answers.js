var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');

module.exports = {

	create: function(req,res){
		console.log(req.body);
		console.log(req.params);
		var answer_data = {author: req.body.author, answer: req.body.answer, description: req.body.description, post: req.params.id};
		var new_answer = new Answer(answer_data);
		// can get ID from the client and pass into the comment_data object, or can get from the Post.find function
		Question.findOne({_id: req.params.question_id}).populate('answers').exec(function(err, question){
			console.log(question);
			question.answers.push(new_answer);
			question.save(function(err, results){
				new_answer.save(function(err, data){
					res.json(data);
				});
			});
		});
	},

	like: function(req, res){
		Question.findOne({_id: req.params.question_id}, function(err, question){
			if(err){
				console.log(err);
			} else {
				Answer.findOne({_id: req.body.answer}, function(err, answer){
					answer.likes += 1;
					answer.save(function(err, data){
						if(err){
							console.log(err);
						} else {
							res.json(data);
						};
					});
				});
			};
		});
	}
}