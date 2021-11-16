import got from 'got';

export const ejemploGot1 = async () => {
  try {
    const resp = await got.get('https://jsonplaceholder.typicode.com/posts');
    console.log(resp.body);
  } catch (err) {
    console.log(err);
  }
};
