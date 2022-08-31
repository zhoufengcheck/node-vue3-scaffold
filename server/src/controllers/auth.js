
class Auth {
    constructor(){
    }
    login(req, res) {
        let body = req.body;
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
        req.session.destroy();
        res.redirect('/login.html')
    }
}
export default new Auth()