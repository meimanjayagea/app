import express from 'express';
import db from './config/database.js';
import router from './routes/index.js';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 5001
dotenv.config();

try {
    await db.authenticate();
    console.log("database is connected");
} catch (error) {   
    console.error(error);
}
app.use(express.json());
app.use(router);


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
