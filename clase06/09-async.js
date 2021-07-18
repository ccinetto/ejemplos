const fs = require('fs/promises');

//DESAFIO USANDO ASYNC//AWAIT
const main = async () => {
  try {
    const info = {
      contenidoStr: undefined,
      contenidoObj: undefined,
      size: undefined,
    };

    const data = await fs.readFile('./package.json');
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
  }
};

main();
