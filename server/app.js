/* eslint-disable no-unused-expressions */
require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => { `Server started at ${PORT} port`; });
