import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default function normalLog(data){
    if(data instanceof Object) {
        data = JSON.stringify(data)
    }
    let obj = {
        time: new Date(),
        text: data,
        logId: "nice" // 用于kibana识别
    }

    fs.appendFileSync(
        path.join(__dirname, '../../log/normal.txt'),
        JSON.stringify(obj)+'\n',
        'utf8'
    )
}