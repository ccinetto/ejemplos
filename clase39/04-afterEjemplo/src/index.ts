import { axiosEjemplo1 } from './ejemplos/ejemploAxios';

// const url = 'https://jsonplaceholder.typicode.com/posts/2';

const url = '2';
axiosEjemplo1(url)
  .then((data) => console.log(data))
  .catch((err) => {
    console.log('error');
    console.log(err.message);
  });
