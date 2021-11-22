const express = require('express');
const router = express.Router();

const {
	createJob,
	deleteJob,
	getAllJobs,
	getJob,
	updateJob,
} = require('../controllers/jobs.controller');

router.route('/').post(createJob).get(getAllJobs);
router.route('/:id').post(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
