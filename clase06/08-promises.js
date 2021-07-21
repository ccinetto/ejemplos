const fs = require('fs/promises');

//DESAFIO USANDO PROMISES
const info = {
  contenidoStr: undefined,
  contenidoObj: undefined,
  size: undefined,
};

fs.readFile('./package.json', 'utf-8')
  .then((fileData) => {
    info.contenidoStr = fileData;
    info.contenidoObj = JSON.parse(fileData);
    return fs.stat('./package.json');
  })
  .then((stats) => {
    info.size = stats.size;
    return fs.writeFile(
      './carpetainterna/info.txt',
      JSON.stringify(info, null, '\t')
    );
  })
  .then(() => {
    console.log('FIN PROCESO');
  })
  .catch((err) => {
    console.log('ERROR', err);
  });
