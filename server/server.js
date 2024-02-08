const express = require('express');
const path = require('path');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));