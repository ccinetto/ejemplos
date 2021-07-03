const axios = require('axios');

// const funcionAsync = async () => {
//   try {
//     const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     console.log(resp);
//   } catch (err) {
//     console.log('HUBO UN ERROR');
//     console.log(err.message);
//   } finally {
//     console.log('ESTO SE EJECUTA SI O SI');
//   }

//   console.log('SIGO VIVO');
// };

// funcionAsync();

axios
  .get('https://jsonplacholder.typicode.com/posts')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log('HUBO UN ERROR');
    console.log(error.message);
  })
  .finally(() => {
    console.log('ESTO SE EJECUTA SI O SI');
  });
