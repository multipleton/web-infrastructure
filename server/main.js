const http = require('http');

const router = require('@bakeryjs/router')();
const { parse } = require('cli-argv-parser');

const { port } = parse(process.argv, { port: String });

require('./src/handlers/users.handler')(router);

const server = http.createServer(router.handler);
server.listen(port || 3012);
