import { Router } from "express";
import * as users from './user.controller.js'
const router = Router();
router.post('/addUser',users.addUser);
router.get('/checkUser',users.checkUser);
export default router;