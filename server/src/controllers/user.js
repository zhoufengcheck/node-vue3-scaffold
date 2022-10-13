import UserService from '../services/user.js';
import normalLog from '../utils/normalLog.js'
import {setRedis, getRedis} from '../utils/redis.js';
import { uid } from 'uid'
import schedule from 'node-schedule';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
    // async getAllUserList(req, res){
    //     let list = await UserService.findData({
    //         $where: function(){
    //             return this.user_name == 'zhou1feng'
    //         }
    //     })
    //     await new Promise((res,rej)=>{
    //         setTimeout(()=>{
    //             res(1)
    //         },3000)
    //     })
    //     // res.set('Cache-control', 'max-age=10000')
    //     res.send({
    //         status:true,
    //         data:list,
    //         a:1
    //     })
    // }
    async getAllUserList(req, res){
        //设置静态资源
        let url = path.join(__dirname,'../../node_modules.zip')
        let size = fs.statSync(url).size || null
        // let data = fs.createReadStream(path.join(__dirname,'../../node_modules.zip'))
        let range = req.headers["range"];
        console.log(range)
         //获取分片的开始和结束位置
        let bytesV = range.split("=");
        bytesV.shift()
        let [start, end] = bytesV.join('').split("-");
        start = Number(start)
        end = Number(end)
        //分片开始 结束位置不对 拒绝下载
        if (start > size || end > size) {
          res.set({ "Content-Range": `bytes */${size}`});
          res.status(416).send(null);
          return;
        }
        //开始分片下载
        res.status(206);
        res.set({
            "Accept-Ranges": "bytes",
            "Content-Range": `bytes ${start}-${end ? end : size}/${size}`,
        });

        console.log(start + '---' + end)
        fs.createReadStream(url, { start, end }).pipe(res);


        // let list = await UserService.findData({
        //     $where: function(){
        //         return this.user_name == 'zhou1feng'
        //     }
        // })
        // res.send({
        //     status:true,
        //     // data:list,
        //     a:1
        // })
        // data.pipe(res);
    }
    async getSize(req,res){
         //获取要下载文件的路径
         let filePath = path.join(__dirname,'../../node_modules.zip')
         //console.log(filePath)
         //获取文件的大小
         let size = fs.statSync(filePath).size || null
         console.log('下载文件大小' + size)
         res.send({
           msg:'ok',
           data:size.toString()
         })
    }
    async getData(req,res) {
        res.send({
            status:true,
            a:1
        })
    }
}
//W/"20a-9wBiW4cYQJ9eR0uKm9xm+JKS+eM

export default new User()