const mongoose = require('mongoose');

function dbConnect() {
  mongoose
    .connect([process.env.MONGO_URI, process.env.MONGO_DATABASE].join('/'))
    .then(() => {
      console.log('--> mongoDB is connected successfully...');
    })
    .catch(console.error);
}

module.exports = dbConnect;
