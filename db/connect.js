const mongoose = require('mongoose');

const connectDb = (url) => {
    return mongoose.connect(url).then(() => console.log("DB Connected...."));
}

module.exports = connectDb;