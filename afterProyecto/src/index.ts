import Server from './services/server';

const puerto = process.env.PORT || 8080;

Server.listen(puerto, () => console.log(`Server up puerto ${puerto}`));
