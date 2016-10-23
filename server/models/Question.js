var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your friend schema and add it to the mongoose.models

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
	author: String,
	question: String,
	description: String,
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
	// ref matches to whatever you named the model in var comment = mongoose.model('comment', etc.)
});

var Question = mongoose.model('Question', questionSchema);