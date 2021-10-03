import express from 'express';
import mainRouter from '../routes';
import session from 'express-session';
import passport from '../middlewares/auth';
import path from 'path';
import exphbs from 'express-handlebars';

const app = express();

app.use(express.json());

app.use(
  session({
    secret: 'your secret line of secretness',
    resave: true,
    saveUninitialized: true,
  })
);

const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));

app.use(passport.initialize());
app.use(passport.session());

const viewsPath = path.resolve(__dirname, '../../views');
const layoutDirPath = viewsPath + '/layouts';
const defaultLayerPth = viewsPath + '/layouts/main.hbs';
const partialDirPath = viewsPath + '/partials';

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    layoutsDir: layoutDirPath,
    extname: 'hbs',
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);

// Este middleware se pone para ejemplo solamente.
app.use((req, res, next) => {
  /** https://www.youtube.com/watch?v=fGrSmBk9v-4 */
  /**
   * Cuando un usario se loguea correctamente, passport va a crear dentro de req.session una key llamada
   * passport. El valor de esa key sera un objeto con la info del usuario.
   * Ese objeto solo va a tener la key user cuyo valor es el userId del usuario logueado
   * Esa info la completa la funcion passport.serializeUser
   * Ej:
   * {
   *  "cookie":{
   *    "originalMaxAge":null,
   *    "expires":null,
   *    "httpOnly":true,
   *    "path":"/"
   *  },
   *  "passport":{"user":"6158c9cb4d9971ee67417051"}}
   */

  console.log(`REQ.SESSION =>\n${JSON.stringify(req.session)}`);

  /** Por otro lado, cada vez que viene una request nueva, passport va a tomar la info que
   * esta en el campo req.session.passport.user y va a llamar a la funcion deserializeUser
   * pasandole esa info. Esta funcion lo que hace es buscar en la DB el user y la info
   * la guarda en req.user
   */
  console.log(`REQ.USER =>\n${JSON.stringify(req.user)}`);

  /**Passport ofrece este metodo para saber si un usuario esta autenticado o no. Devuelve true o false */
  console.log(`REQ.AUTHENTICATE =>\n${JSON.stringify(req.isAuthenticated())}`);

  next();
});

app.use('/api', mainRouter);

export default app;
