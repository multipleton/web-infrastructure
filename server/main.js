const http = require('http');

const router = require('@bakeryjs/router')();
const { parse } = require('cli-argv-parser');

const { port } = parse(process.argv, { port: String });

const greet = ({ params, res }) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return `Hello ${params.name}`;
};

router
  .handle('/greet/:name', greet)
  .provideReqRes(true);

const server = http.createServer(router.handler);
server.listen(port || 3012);
