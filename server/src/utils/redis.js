import { uid } from 'uid'
import redis from 'redis';
const redisClient=redis.createClient({url:"redis://127.0.0.1:6379"});

// 连接到redis-server回调事件
redisClient.on('connect', function () {
    console.log(new Date(), 'redis is now connected!');
});
redisClient.on('error', (err) => console.log('Redis Client Error', err));
await redisClient.connect()

export let setRedis = async (key, val, data) => {
    if (typeof val == 'object') {
        val = JSON.stringify(val)
    }
    let result;
    if(data.options) {
        result = await redisClient.set(key, val,data.options)
    }else{
        result = await redisClient.set(key, val)
    }
    if(data.expire) {
        redisClient.expire(key, data.expire)
    }
    return result
}
export let getRedis = async (key) => {
    let result =await redisClient.get(key)
    return result
}

