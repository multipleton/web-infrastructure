const { setAccessHeaders, setStatus, preflight } = require('../utils/http');
const {
  getAllContributions,
  createContribution,
  removeContribution,
} = require('../services/contributions.service');

const getContributions = async ({ res }) => {
  setAccessHeaders(res);
  try {
    const result = await getAllContributions();
    return result;
  } catch (err) {
    console.error(err);
    setStatus(res, 500);
  }
};

const postContribution = async ({ res, body }) => {
  setAccessHeaders(res);
  try {
    const { shared_id, title, description } = body;
    if (!shared_id || !title || !description) {
      setStatus(res, 400);
      return;
    }
    const result = await createContribution({ shared_id, title, description });
    return result;
  } catch (err) {
    console.error(err);
    setStatus(res, 500);
  }
};

const deleteContribution = async ({ res, params }) => {
  setAccessHeaders(res);
  try {
    const { id } = params;
    await removeContribution(id);
  } catch (err) {
    console.error(err);
    setStatus(res, 500);
  }
};

const configurateRoutes = router => {
  router.handle('/contributions', getContributions).provideReqRes(true);
  router
    .handle('/contributions', postContribution)
    .method('POST')
    .provideReqRes(true);
  router
    .handle('/contributions/:id', deleteContribution)
    .method('DELETE')
    .provideReqRes(true);
  // preflight hanlder
  router
    .handle('/contributions/:id', preflight)
    .method('OPTIONS')
    .provideReqRes(true);
};

module.exports = configurateRoutes;
