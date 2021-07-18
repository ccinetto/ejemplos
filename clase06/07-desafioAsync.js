const fs = require('fs');

fs.readFile('./package.json', (errRead, dataFile) => {
  if (errRead) console.log('Error Lectura', err);

  fs.stat('./package.json', (errStat, stats) => {
    if (errStat) console.log('Error Lectura Estadisticas', err);

    const miDataString = dataFile.toString();
    const miObjeto = JSON.parse(dataFile);
    const size = stats.size;

    const info = {
      contenidoStr: miDataString,
      contenidoObj: miObjeto,
      size,
    };

    console.log(info);

    fs.writeFile(
      './carpetainterna/info.txt',
      JSON.stringify(info, null, '\t'),
      (errWrite, writeOutput) => {
        console.log('Fin proceso');
      }
    );
  });
});
