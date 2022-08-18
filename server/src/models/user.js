import mongoose from 'mongoose';
const { Schema } = mongoose;
import MetaSchema from './meta';
const UserSchema = new Schema({
    user_name:  String, // String is shorthand for {type: String}
    age: Number,   
    meta: MetaSchema
})
export default mongoose.model('user', UserSchema);