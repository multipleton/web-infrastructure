const { setAccessHeaders, setStatus } = require('../utils/http');

const {
  findAllUsers,
  findUser,
  createUser,
  updateUser,
  removeUser,
} = require('../services/users.service');

const configure = router => {
  router
    .handle('/users', getUsers)
    .provideReqRes(true);
  router
    .handle('/users/:id', getUser)
    .provideReqRes(true);
  router
    .handle('/users', postUser)
    .method('POST')
    .provideReqRes(true);
  router
    .handle('/users/:id', putUser)
    .method('PUT')
    .provideReqRes(true);
  router
    .handle('/users/:id', deleteUser)
    .method('DELETE')
    .provideReqRes(true);
};

const getUsers = async ({ res }) => {
  setAccessHeaders(res);
  try {
    const result = await findAllUsers();
    return JSON.stringify(result);
  } catch (err) {
    console.error(err);
    setStatus(400);
  }
};

const getUser = async ({ res, params }) => {
  setAccessHeaders(res);
  const { id } = params;
  try {
    const result = await findUser(id);
    return JSON.stringify(result);
  } catch (err) {
    console.error(err);
    setStatus(400);
  }
};

const postUser = async ({ res, body }) => {
  setAccessHeaders(res);
  const { name, country, stack } = body;
  try {
    await createUser(name, country, stack);
  } catch (err) {
    console.error(err);
    setStatus(400);
  }
};

const putUser = async ({ res, params, body }) => {
  setAccessHeaders(res);
  const { id } = params;
  const { name, country, stack } = body;
  try {
    await updateUser(id, name, country, stack);
  } catch (err) {
    console.error(err);
    setStatus(400);
  }
};

const deleteUser = async ({ res, params }) => {
  setAccessHeaders(res);
  const { id } = params;
  try {
    await removeUser(id);
  } catch (err) {
    console.error(err);
    setStatus(400);
  }
};

module.exports = configure;
