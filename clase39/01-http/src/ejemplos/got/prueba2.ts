import got from 'got';

export const ejemploGot2 = async () => {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  const url = 'https://jsonplaceholder.typicode.com/posts';

  const options = {
    prefixUrl: url,
    method: 'POST',
    json: data,
  };

  try {
    /** Opcion1 llamar a got y pasar en las options en metodo */
    // const resp = await got(options)

    /**Opcion2, llamar al metodo directamente */
    const resp = await got.post(url, { json: data });
    console.log(resp.body);
  } catch (err) {
    console.log(err);
  }
};
