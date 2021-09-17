import Server from './services/server';
import Config from './config';

const puerto = Config.PORT;

Server.listen(puerto, () => console.log(`Server up puerto ${puerto}`));
