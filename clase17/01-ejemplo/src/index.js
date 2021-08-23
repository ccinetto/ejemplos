import app from './services/server';
const puerto = 8080;

app.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));
