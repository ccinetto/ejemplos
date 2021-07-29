import express from 'express';
import path from 'path';

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// /**Podemos poner mas de un path statico para express */

// const secondStaticFolder = path.resolve(__dirname, './static');
// console.log(secondStaticFolder);
// app.use(express.static(secondStaticFolder));

// /**
//  * Podemos pasarlo como un path tambien
//  */

// const thirdStaticFolder = path.resolve(__dirname, './static2');

// app.use('/saraza', express.static(thirdStaticFolder));
