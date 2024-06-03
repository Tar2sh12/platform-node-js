import { Router } from "express";
import * as comments from './comment.controller.js'
const router = Router();
router.post('/createComment',comments.createComment);
router.get('/getAllComments',comments.getAllComments);
router.delete('/deleteComment/:id',comments.deleteComment);
router.put('/updateComment/:id',comments.updateComment);
router.get('/getCommentsOfSpecificPostsOfSpecificUser/:id',comments.getCommentsOfSpecificPostsOfSpecificUser);
export default router;