import express from 'express';
import path from 'path';

const multer = require('multer');
/**En dest ponemos la carpeta donde vamos a guardar el archivo */
const upload = multer({ dest: './uploads' });

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

/**Upload.single se usa para subir 1 solo archivo */
/**Recibe como parametro el nombre del param de la request */
app.post('/single', upload.single('imagen'), (req, res) => {
  try {
    console.log(req.file);
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});

// /** OPCION 2
//  * Aca podemos guardar directamente el archivo con extension y todo
//  * en destionation ponemos la carpeta donde vamos a guardarlo
//  * en filename ponemos el nombre con el cual guardaremos el archivo.
//  * Al usar originalName (que viene desde el parametro file) guardamos el archivo con el nombre que viene
//  */

const folderName = './uploads';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadMejorado = multer({ storage: storage });

app.post('/single-mejorado', uploadMejorado.single('imagen'), (req, res) => {
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});

/**OPCION3 CARGAR MULTIPLES ARCHIVOS */
app.post('/multiple', uploadMejorado.array('imagenes', 3), (req, res) => {
  try {
    res.send(req.files);
  } catch (err) {
    res.send(400);
  }
});
