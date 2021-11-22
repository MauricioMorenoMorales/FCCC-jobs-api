const User = require('../models/User.model');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

module.exports.register = async function (req, res) {
	const user = await User.create({ ...req.body });
	const token = jwt.sign(
		{ userId: user._id, name: user.name },
		process.env.JWT_SECRET,
		{ expiresIn: '30d' },
	);
	res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

module.exports.login = async function (req, res) {
	res.send('Login user');
};
