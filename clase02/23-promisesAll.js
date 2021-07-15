const axios = require('axios');

const funcionAsync = (url, index) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('EJECUTANDO URL NUMERO', index);
      const result = await axios.get(url);
      resolve(result.data);
      console.log('TERMINANDO URL NUMERO', index);
    } catch (err) {
      console.log('TERMINO MAL URL', url);
      reject(err.messsage);
    }
  });
};

(async function () {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typie.com/posts',
    'https://jsonplace.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typie.com/posts',
    'https://jsonplace.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typie.com/posts',
    'https://jsonplace.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts',
  ];

  console.log('ARRANCAMOS');

  const promises = urls.map((aUrl, index) => funcionAsync(aUrl, index));

  await Promise.allSettled(promises);
  // await Promise.all(promises);

  console.log('TERMINAMOS');
})();
