const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  shared_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ContributionModel = mongoose.model('contributions', ContributionSchema);

module.exports = ContributionModel;
