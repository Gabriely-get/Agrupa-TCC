import dotenv from 'dotenv';
import express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/auth.routes');

dotenv.config({
	path: '.env'
});
const app = express();

var corsOptions = {
	origin: "http://localhost:8000"
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

module.exports = app;