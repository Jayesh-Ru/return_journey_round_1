const app = require('./src/app');
import * as dotenv from 'dotenv'
// dotenv.config()

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });