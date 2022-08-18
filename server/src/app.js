import express from "express";
import mongoose from "mongoose";
import router from './router/index.js';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname, '../../client/dist')))

mongoose.connect('mongodb://localhost:27017/nice');
const db = mongoose.connection;
db.once('open',()=>{
    console.log('mongo connect success')
})
db.on('error',()=>{
    console.log('mongo connect error')
})
db.on('close',()=>{
    console.log('mongo close')
})
app.use('/api', router)



export default app