const mongoose = require('mongoose');

const connectsDB = () => {
    mongoose.connect('mongodb://localhost:27017/paytm-karo').then(() => {
    console.log("database connected")
    }).catch((err) => {
    console.log(`error in database connection ${err}`);
  });
}

module.exports = {
    connectsDB
}