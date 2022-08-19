import express from "express";
import UserControl from '../controllers/user.js'
import multer from 'multer';
const upload = multer({ dest: './files' })
let router = express.Router();

router.post('/', upload.single(), UserControl.getAllUserList);
// router.delete('/',UserControl.deleteUser);

export default router;