import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim: true, lowercase: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true, trim: true},
    password: {type: String, required: true, maxLength: 6}
});

const userModel = mongoose.model('user', userSchema);
export default userModel;