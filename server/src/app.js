import express from "express";
import mongoose from "mongoose";
import router from './router/index.js';
import { fileURLToPath } from 'url';
import path from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import redis from 'redis'
import connectRedis from 'connect-redis';


const app = express();
const redisClient=redis.createClient({url:"redis://127.0.0.1:6379", legacyMode: true});
const RedisStore = connectRedis(session);
app.use(express.urlencoded());
app.use(express.json());

app.use(cookieParser());
app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: 'password',
    resave: false, 
    saveUninitialized:false,
    cookie:{
      httpOnly: true,
      maxAge: 1000*60*5 
    }
}));

//设置静态资源
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../../client/dist')))

//链接数据库
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