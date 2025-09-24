import mongoose from "mongoose";
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    balanec: { type: Number }
})

const accountModel = mongoose.model('account', accountSchema);
export default accountModel;