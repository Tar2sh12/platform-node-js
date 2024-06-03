import express, { json } from 'express';
const app = express();
import { dbConnection } from './DB/connection.js';
import userRouter from './src/modules/user/user.routes.js';
import postRouter from './src/modules/post/post.routes.js';
import commentRouter from './src/modules/comment/comment.routes.js';
import cors from 'cors';
app.use(cors());
app.use(json())
const port = process.env.PORT || 3004
app.use('/user',userRouter)
app.use('/post',postRouter)
app.use('/comment',commentRouter)
dbConnection()
app.listen(port,()=>{
    console.log(`runing on port ${port}`);
})



