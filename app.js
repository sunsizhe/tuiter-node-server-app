import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'
const app = express();
app.use(cors())
app.use(express.json());
mongoose.connect(CONNECTION_STRING);
/*
app.get('/hello', (req, res) => {res.send('Life is good')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
*/
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);