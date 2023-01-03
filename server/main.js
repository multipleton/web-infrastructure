const http = require('http');

const router = require('@bakeryjs/router')();

const greet = ({ params }) => `Hello ${params.name}`;

router.handle('/greet/:name', greet);

const server = http.createServer(router.handler);
server.listen(3010);
