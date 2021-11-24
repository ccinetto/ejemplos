import axios from 'axios';

export const axiosEjemplo1 = async (url: string) => {
  try {
    const result = await axios.get(url);

    return result.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Hubo un error en el pedido de axios. ${err.message}`);
      throw new Error(err.message);
    }
  }
};
