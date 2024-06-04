import { Router } from "express";
import * as users from './user.controller.js'
const router = Router();
router.post('/addUser',users.addUser);
router.get('/checkUser',users.checkUser);
router.get('/getAll',users.getAllUsers);
router.delete('/logout/:id',users.logout);
router.post('/createPost/:id',users.createPost);
router.post('/createCommentOnPost/:id',users.createCommentOnPost);
router.delete('/deletePost/:id',users.deletePost);
router.delete('/deleteComment/:id',users.deleteComment);
export default router;