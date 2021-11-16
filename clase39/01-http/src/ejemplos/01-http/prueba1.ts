import https from 'https';

var options = {
  method: 'GET',
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  headers: {},
  maxRedirects: 20,
};

var req = https.request(options, function (res) {
  var chunks: any[] = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function (chunk: any) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on('error', function (error) {
    console.error(error);
  });
});

export const httpsEjemplo1 = () => req.end();
