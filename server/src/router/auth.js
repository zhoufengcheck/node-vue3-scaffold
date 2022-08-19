import express from "express";
import AuthControl from '../controllers/auth.js'
let router = express.Router();

router.post('/login',  AuthControl.login);
router.get('/logout',  AuthControl.logout);

export default router;