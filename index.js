import express, { json } from 'express';
const app = express();
import { dbConnection } from './DB/connection.js';
import userRouter from './src/modules/user/user.routes.js';
import User from './DB/models/User.model.js';
import Post from './DB/models/Post.model.js';
import comment from './DB/models/comment.model.js';
app.use(json())
app.use('/user',userRouter)
dbConnection()
app.listen(3004,()=>{
    console.log('runing on port 3004');
})



