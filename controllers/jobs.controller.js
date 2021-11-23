const Job = require('../models/Job.model');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

module.exports.getAllJobs = async function (req, res) {
	res.json({ user: req.user });
};

module.exports.getJob = async function (req, res) {
	res.json({ user: req.user });
};

module.exports.createJob = async function (req, res) {
	req.body.createdBy = req.user.userId;
	const job = await Job.create(req.body);
	res.status(StatusCodes.CREATED).json({ job });
};

module.exports.updateJob = async function (req, res) {
	res.json({ user: req.user });
};

module.exports.deleteJob = async function (req, res) {
	res.json({ user: req.user });
};
