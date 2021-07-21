const fs = require('fs');

try {
  const data = fs.readFileSync('./package.json', 'utf-8');

  const miDataString = data;
  const miObjeto = JSON.parse(data);

  const stats = fs.statSync('./package.json');
  console.log(stats);
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  const size = stats.size;

  const info = {
    contenidoStr: miDataString,
    contenidoObj: miObjeto,
    size,
  };

  console.log(info);

  fs.writeFileSync(
    './carpetainterna/info.txt',
    JSON.stringify(info, null, '\t')
  );
} catch (err) {
  console.log(err);
}
