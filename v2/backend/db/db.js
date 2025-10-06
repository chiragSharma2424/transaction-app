const mongoose = require('mongoose');

export const connectsDB = () => {
    mongoose.connect('mongodb://localhost:27017/paytm-karo').then(() => {
    console.log("database connected")
    }).catch((err) => {
    console.log(`error in database connection ${err}`);
  });
}