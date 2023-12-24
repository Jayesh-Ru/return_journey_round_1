import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import cors from 'cors'

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', require('./src/routes/api'));

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
