const http = require('http');

const router = require('@bakeryjs/router')();
const { parse } = require('cli-argv-parser');
const mongoose = require('mongoose');

require('./src/config/mongo')();

const { port } = parse(process.argv, { port: String });

require('./src/handlers/users.handler')(router);
require('./src/handlers/contributions.handler')(router);

const server = http.createServer(router.handler);
server.listen(port || 3012);

const exitFunction = () => {
  mongoose.disconnect();
  process.exit(0);
};

process.on('SIGINT', exitFunction);
process.on('SIGTERM', exitFunction);
