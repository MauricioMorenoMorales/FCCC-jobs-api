const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide name'],
		minLength: [3, 'The name must be at least 3 characters'],
		maxLength: [50, 'The name must be max 50 characters'],
	},
	email: {
		type: String,
		required: [true, 'Please provide email'],
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please provide a valid email',
		],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide password'],
		minWidth: [6, 'Password must be at least 6 characters'],
		maxLength: [30, 'Password must be smaller than 30 characters']
	}
});

module.exports = mongoose.model('User', UserSchema);
