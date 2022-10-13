import express from "express";
import UserControl from '../controllers/user.js'
import handlerError from "../middleware/handlerError.js";
import multer from 'multer';
const upload = multer({ dest: './files' })
let router = express.Router();

router.post('/', upload.single(), handlerError(UserControl.getAllUserList.bind(UserControl)));
router.get('/size',  handlerError(UserControl.getSize.bind(UserControl)));


export default router;