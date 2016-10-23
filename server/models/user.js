var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your friend schema and add it to the mongoose.models

// this should be whatever the name of the collection will be 
var UserSchema = new mongoose.Schema({
	name: String
}, { timestamps: true });

// need to change this for the exam too
var User = mongoose.model('User', UserSchema);