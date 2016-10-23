var mongoose = require('mongoose');
var Schema = mongoose.Schema;


 var answerSchema = new Schema({
	author: String,
	answer: String,
	description: String,
	likes: {type: Number, default: 0},
	question: {type: Schema.Types.ObjectId, ref: 'Question'}
	// Schema.ObjectID is the same as Schema.Types.ObjectID
});

var Answer = mongoose.model('Answer', answerSchema);