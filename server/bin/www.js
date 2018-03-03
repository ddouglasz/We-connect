// This will be our application entry. We'll setup our server here.
// const http = require('http');
// const app = require('./server/app'); // The express app we just created

import * as http from 'http';
import app from '../../app';

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

console.log('🤡 let the awesomeness begin ♣️ ♥️');

