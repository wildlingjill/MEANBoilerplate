var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models

// this should be whatever the name of the collection will be 
var FriendSchema = new mongoose.Schema({
	name: {
		firstname: String,
		lastname: String
	},
	birthday: Date,
}, { timestamps: true });

// need to change this for the exam too
var Friend = mongoose.model('Friend', FriendSchema);