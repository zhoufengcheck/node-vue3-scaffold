import UserModel from '../models/user.js';

class UserService {
    constructor(){
    }
    async findData(obj){
        let userList = await UserModel.find(obj);
        return userList;
    }
    async createData(){
        let user = await UserModel.create({
            user_name:'zhoufeng',
            age: 18,   
            meta: {
                create_by: 'System',
                create_datetime: (new Date()).toISOString(),
                modify_by: 'System',
                modify_datetime: (new Date()).toISOString(),
            }
        });
        return user
    }
}
export default new UserService()


