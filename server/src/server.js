import app from './app.js';
import http from 'http';
const port = 3000;
app.set('port',port)
let server = http.createServer(app)
server.listen(port)