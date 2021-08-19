import server from './services/server';
const puerto = 8080;

server.listen(puerto, console.log('SERVER UP!!', puerto));
