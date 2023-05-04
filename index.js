require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookiepParser = require('cookie-parser');
const cors = require('cors');


const { env: { PORT, MONGO_URL: url }, argv: [, , port = PORT || 3001], } = process;
app = express()