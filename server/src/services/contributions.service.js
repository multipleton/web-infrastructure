const ContributionModel = require('../config/contribution.model');

const getAllContributions = async () => {
  const result = await ContributionModel.find();
  return result;
};

const createContribution = async ({ shared_id, title, description }) => {
  const result = await ContributionModel.create({
    shared_id,
    title,
    description,
  });

  return result;
};

const removeContribution = async id => {
  const result = ContributionModel.deleteOne({ _id: id });
  return result;
};

module.exports = {
  getAllContributions,
  createContribution,
  removeContribution,
};
