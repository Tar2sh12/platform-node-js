import { Router } from "express";
import * as posts from './post.controller.js'
const router = Router();
router.post('/createPost',posts.createPost);
router.get('/getAllPosts',posts.getAllPosts);
router.get('/getPostsOfSpecificUser/:id',posts.getPostsOfSpecificUser);
router.delete('/deletePost/:id',posts.deletePost);
router.put('/updatePost/:id',posts.updatePost);
export default router;