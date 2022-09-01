let fs = require('fs');
let path = require('path');
// 处理石墨文档md下载时，base64图片转换
async function dealNoteFile(from, to){
    // 是否存在to文件夹，不存在就递归创建
    let exit = fs.existsSync(to);
    if(!exit) {
        fs.mkdirSync(to, {recursive:true})
    }

    var readDir = fs.readdirSync(from, {writeFileTypes:true});
    for(let i = 0; i<readDir.length; i++) {
        // 如果是文件夹就递归
        const info = fs.statSync(path.join(from, readDir[i]))
        if (info.isDirectory()){
            dealNoteFile(path.join(from, readDir[i]), path.join(to, readDir[i]));
            continue
        } 
        //  文件就读取
        let text = fs.readFileSync(path.join(from, readDir[i]), {encoding:'utf8'});
        let base64Arr = text.match(/\(data:image(.)*?\)/g);
        if(!base64Arr) {
            continue
        }
        for(let j = 0; j<base64Arr.length; j++) {
            let base64 = base64Arr[j].replace(/[\(|\)]/g,'');// 去掉括号
            let type = base64.match(/(?<=data:image\/)[a-z]+(?=;base64)/); // 获取图片格式
            if(!type){
                continue;
            }
            let imgType = type[0];

            base64 = base64.replace(/data:image\/\w+;base64,/,''); // 去掉多余字段
            let imgName = `img${+new Date()}.${imgType}`; //给文件命名
            let imgPath = path.join(to, imgName); // 图片路径
            await new Promise((res)=>{
                fs.writeFile(imgPath, base64, 'base64', function(err){//用fs写入文件
                    if(err){
                        console.log(err);
                    }else{
                        console.log('写入成功！');
                        res('success')
                    }
                })
            })
            // 把base64 替换成图片链接
            text = text.replace(base64Arr[j],`![${imgName.split('.')[0]}](${path.join(to, imgName)})`)
        }
        text = text.replace(/!\[图片\]/g,'') //去掉![图片]
        await new Promise((res)=>{
            fs.writeFile(path.join(from, readDir[i]), text, 'utf-8', function(err){//用fs写入文件
                if(err){
                    console.log(err);
                }else{
                    console.log('写入成功！');
                    res('success')
                }
            })
        })
    }
}

dealNoteFile(path.join(__dirname,'./note'),path.join(__dirname,'./noteImg'))
