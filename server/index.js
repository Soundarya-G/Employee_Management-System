//Express

'use strict';

const express = require('express');
const fileUpload = require ('express-fileUpload')
const connectDB = require('./config/database');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fileRoutes = require('./routes/file-upload-routes');

const port = process.env.PORT || 8080;
const app = express();

//Connect Database
connectDB();

app.use(cors());

app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.routes);

app.listen(port, () => console.log(`Server listening on ${port}!!!.....`));
