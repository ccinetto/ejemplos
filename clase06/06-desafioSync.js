const fs = require('fs');

try {
  const data = fs.readFileSync('./package.json');

  const miDataString = data.toString();
  const miObjeto = JSON.parse(data);

  const stats = fs.statSync('./package.json');
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
