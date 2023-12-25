import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import fileLoggerMiddleware from './middlewares/fileLoggerMiddleware';

const routes = require('./routes');

const app = express();
app.use(fileLoggerMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',routes);


module.exports = app;


