var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your friend schema and add it to the mongoose.models

// this should be whatever the name of the collection will be 
var PollSchema = new mongoose.Schema({
	author: String,
	question: String,
	option1: String,
	option1votes: { type: Number, default: 0},
	option2: String,
	option2votes: { type: Number, default: 0},
	option3: String,
	option3votes: { type: Number, default: 0},
	option4: String,
	option4votes: { type: Number, default: 0}
}, { timestamps: true });

// need to change this for the exam too
var Poll = mongoose.model('Poll', PollSchema);