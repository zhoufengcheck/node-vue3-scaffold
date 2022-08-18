class User {
    constructor(){
    }
    async getList(req, res){
        console.log(111)
        await new Promise((res,rej)=>{
            setTimeout(()=>{
                res(1)
            },2000)
        })
        res.send({
            status:true,
            name:'1212'
        })
    }
    deleteUser(req,res) {
        res.status(200).send({
            status:true,
            
        })
    }
}

export default new User()