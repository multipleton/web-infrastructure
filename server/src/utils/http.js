const setAccessHeaders = res => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
};

const setStatus = (res, status) => {
  res.statusCode = status;
};

const preflight = ({ res }) => {
  setAccessHeaders(res);
};

module.exports = {
  setAccessHeaders,
  setStatus,
  preflight,
};
