module.exports.getAllJobs = async function (req, res) {
	res.send('get all jobs');
};

module.exports.getJob = async function (req, res) {
	res.send('get job');
};

module.exports.createJob = async function (req, res) {
	res.send('create job');
};

module.exports.updateJob = async function (req, res) {
	res.send('update job');
};

module.exports.deleteJob = async function (req, res) {
	res.send('delete job');
};
