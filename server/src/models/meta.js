import mongoose from "mongoose";
const { Schema } = mongoose;
const MetaSchema = new Schema({
    create_by: String,
    create_datetime: {
        default: (new Date()).toISOString(),
        type: Date
    },
    modify_by: String,
    modify_datetime: {
        default: (new Date()).toISOString(),
        type: Date
    }
})
export default MetaSchema;