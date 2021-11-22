const User = require('../models/User.model');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const bcrypt = require('bcryptjs');

module.exports.register = async function (req, res) {
	const user = await User.create({ ...req.body });
	res.status(StatusCodes.CREATED).json({ user });
};

module.exports.login = async function (req, res) {
	res.send('Login user');
};
