const setAccessHeaders = res => {
  res.setHeader('Access-Control-Allow-Origin', '*');
};

const setStatus = (res, status) => {
  res.statusCode = status;
};

module.exports = {
  setAccessHeaders,
  setStatus
};
