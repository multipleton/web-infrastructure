const mongoose = require('mongoose');

const url =
  'mongodb://m-wi-db-user:m-wi-db-password@wi-mongo:27017/m-wi';

module.exports = () => {
  try {
    mongoose
      .connect(url)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch(error => {
        console.error(error);
      });
  } catch (err) {
    console.error(err);
  }
};
