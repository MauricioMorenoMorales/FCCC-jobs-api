require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// connect DB
const connectDB = require('./db/connect');

// importing middlewares
const { auth } = require('./middleware/authentication');

// routers
const authRouter = require('./routes/auth.routes');
const jobsRouter = require('./routes/jobs.routes');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages

// routes
app.get('/', (req, res) => {
	res.send('jobs api');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', auth, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

(async () => {
	try {
		connectDB(process.env.MONGO_URI);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`),
		);
	} catch (error) {
		console.log(error);
	}
})();
