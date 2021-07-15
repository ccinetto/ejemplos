const funcionAsync = async () => {
  try {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(resp);
  } catch {
    console.log('HUBO UN ERROR');
  } finally {
    console.log('ESTO SE EJECUTA SI O SI');
  }

  console.log('SIGO VIVO');
};

funcionAsync();
