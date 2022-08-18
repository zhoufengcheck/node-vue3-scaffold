import express from "express";
import UserControl from '../controllers/user.js'

let router = express.Router();

router.post('/', UserControl.getList);
router.delete('/',UserControl.deleteUser);

export default router;