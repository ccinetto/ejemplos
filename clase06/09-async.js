const fs = require('fs/promises');

//DESAFIO USANDO ASYNC//AWAIT
const main = async () => {
  try {
    const info = {
      contenidoStr: undefined,
      contenidoObj: undefined,
      size: undefined,
    };

    const data = await fs.readFile('./packagesadsads.json');
    const stats = await fs.stat('./package.json');
    info.contenidoStr = data.toString();
    info.contenidoObj = JSON.parse(data);
    info.size = stats.size;

    await fs.writeFile(
      './carpetainterna/info.txt',
      JSON.stringify(info, null, '\t')
    );

    console.log('FIN PROCESO');
  } catch (err) {
    console.log('ERROR ==>', err);
    throw new Error(err);
  }
};

console.log('LINEA INICIAL');
main()
  .then(() => {
    console.log('LINEA FINAL');
  })
  .catch((err) => {
    console.log('ATAJE EL ERROR', err);
  })
  .finally(() => {
    console.log('ESTO SE EJECUTA SI O SI');
  });
