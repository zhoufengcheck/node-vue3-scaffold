
class Auth {
    constructor(){
    }
    login(req, res) {
        let body = req.body;
        console.log(body)
        if (body.name == "nice" && body.password=="123"){
            req.session.user = {
                name:'nice'
            }
            res.send({
                status:true
            })
        }
        else{
            res.send({
                status:false
            })
        }
    }
    logout(req, res) {

    }
}
export default new Auth()