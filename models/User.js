import { mongoose } from "mongoose";
//building the schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minilength: 6
    }
});

//export the collection to mongodb

export default mongoose.model("User", userSchema);