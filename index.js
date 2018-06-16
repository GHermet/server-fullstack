const express = require('express');
const { json } = require('body-parser');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(json());

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

app.listen(PORT);
