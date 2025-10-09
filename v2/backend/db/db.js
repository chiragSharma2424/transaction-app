const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectsDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/paytm', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
    console.log("database connected")
    }).catch((err) => {
    console.log(`error in database connection ${err}`);
  });
}

module.exports = {
    connectsDB
}