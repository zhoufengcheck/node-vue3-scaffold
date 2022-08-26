import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import path from 'path';

import router from './router/index.js';
import auth from './router/auth.js'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import redis from 'redis'
import connectRedis from 'connect-redis';

const app = express();
//设置静态资源
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../../client/dist')))

const redisClient = redis.createClient({url:"redis://127.0.0.1:6379",legacyMode: true});
redisClient.connect();

// 连接到redis-server回调事件
redisClient.on('connect', function () {
    console.log(new Date(), 'redis is now connected!');
});
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
      maxAge: 1000*60*60*24,
    //   sameSite:true
    }
}));



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

app.use('/api',(req,res,next)=>{
    console.log(req.session)
    if (!req.session || !req.session.user) {
        return res.status(401).send({
          status: false
        })
    }
    next()
}, router)
app.use('/', auth);

app.use(function(err, req, res, next) {
    res.status(500).send({
        error: err.stack,
        status: false,
    });
});



export default app