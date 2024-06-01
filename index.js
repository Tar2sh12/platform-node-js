import express, { json } from 'express';
const app = express();
import { dbConnection } from './DB/connection.js';
import userRouter from './src/modules/user/user.routes.js';
import cors from 'cors';
app.use(cors());
app.use(json())
const port = process.env.PORT || 3004
app.use('/user',userRouter)
dbConnection()
app.listen(port,()=>{
    console.log(`runing on port ${port}`);
})



