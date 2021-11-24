const Job = require('../models/Job.model');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

module.exports.getAllJobs = async function (req, res) {
	const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt');
	if (!jobs) throw NotFoundError('There is no jobs created.');
	res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

module.exports.getJob = async function (req, res) {
	const {
		user: { userId },
		params: { id: jobId },
	} = req;
	const job = await Job.findOne({ _id: jobId, createdBy: userId });
	if (!job || job == null) throw new NotFoundError(`No job with id ${jobId}`);
	res.status(StatusCodes.OK).json({ job });
};

module.exports.createJob = async function (req, res) {
	req.body.createdBy = req.user.userId;
	const job = await Job.create(req.body);
	res.status(StatusCodes.CREATED).json({ job });
};

module.exports.updateJob = async function (req, res) {
	const {
		user: { userId },
		params: { id: jobId },
		body: { company, position },
	} = req;
	if (company === '' || position === '')
		throw new BadRequestError('Company or Position fields cannot be empty');
	const job = await Job.findByIdAndUpdate(
		{ _id: jobId, createdBy: userId },
		req.body,
		{ new: true, runValidators: true },
	);
	if (!job) throw new NotFoundError(`No job with id ${jobId}`);
	res.status(StatusCodes.ACCEPTED).json({ job });
};

module.exports.deleteJob = async function (req, res) {
	res.json({ user: req.user });
};
