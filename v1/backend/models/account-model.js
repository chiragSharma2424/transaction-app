import mongoose from "mongoose";
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    balance: { type: Number, required: true }
})

const accountModel = mongoose.model('account', accountSchema);
export default accountModel;