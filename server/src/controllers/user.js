import UserService from '../services/user.js';
import normalLog from '../utils/normalLog.js'
import {setRedis, getRedis} from '../utils/redis.js';
import { uid } from 'uid'
import schedule from 'node-schedule';
class User {
    constructor(){
        normalLog({nam:1})
        schedule.scheduleJob('*/5 * * * *', async ()=>{
            let uidRandom = uid(32);
            let data = await getRedis('dd');
            if (data) {
                return;
            } else {
                let result = await setRedis('dd', uidRandom, {
                    options:{
                        PX: 5*60*1000 - 5000,
                        NX: true
                    }
                });
                setTimeout(()=>{
                    if(result === uidRandom) {
                        //do something...
                        console.log(new Date(),'执行定时任务')
                    }
                },1000)
            }
        });
    }
    async getAllUserList(req, res){
        let list = await UserService.findData({})
        // res.set('Cache-control', 'max-age=10000')
        res.send({
            status:true,
            data:list,
            a:1
        })
    }
}
//W/"20a-9wBiW4cYQJ9eR0uKm9xm+JKS+eM

export default new User()