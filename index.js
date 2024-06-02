import express, { json } from 'express';
const app = express();
import { dbConnection } from './DB/connection.js';
import userRouter from './src/modules/user/user.routes.js';
import cors from 'cors';
import Post from './DB/models/Post.model.js'
import Comment from './DB/models/comment.model.js'
app.use(cors());
app.use(json())
const port = process.env.PORT || 3004
app.use('/user',userRouter)
dbConnection()
Post
Comment
app.listen(port,()=>{
    console.log(`runing on port ${port}`);
})



