import { axiosEjemplo1 } from '../ejemplos/ejemploAxios';
import axios from 'axios';

describe('aca vamos a agrupar algunos tests', () => {
  it('a+b debe ser igual a 3', () => {
    //Parte1: Prepare
    const a = 1;
    const b = 2;

    const expectedResult = 3;
    //Parte2: Execute
    const c = a + b;
    //Parte3: Assert
    expect(c).toEqual(expectedResult);
  });

  it('deberia testear bien ejemplo axios', async () => {
    const url = 'miurl';

    const expectedValue = 'hola juan carlos';

    const miAxios = jest.spyOn(axios, 'get').mockImplementation(() => {
      console.log('SE esta ejecutando mi funcion de mentira');
      return new Promise((resolve) => {
        resolve({
          data: expectedValue,
        });
      });
    });

    const result = await axiosEjemplo1(url);

    expect(miAxios).toHaveBeenCalled(); //Verifica si se llame
    expect(miAxios).toHaveBeenCalledWith(url); //Verifica que se llamo pasando como args mi url
    expect(result).toEqual(expectedValue);
    expect(1).toEqual(1);

    const result2 = await axiosEjemplo1(url);

    expect(miAxios).toHaveBeenCalled(); //Verifica si se llame
    expect(miAxios).toHaveBeenCalledWith(url); //Verifica que se llamo pasando como args mi url
    expect(result2).toEqual(expectedValue);
    expect(1).toEqual(1);
  });

  it('deberia tirarme un error', async () => {
    const url = 'miurl';
    const errorMessage = 'request failed with status 400';
    const miAxios = jest.spyOn(axios, 'get').mockImplementation(() => {
      console.log('SE esta ejecutando mi funcion de mentira 2');
      throw new Error(errorMessage);
    });
    let catchedError!: Error;

    try {
      await axiosEjemplo1(url);
      console.log('NO ME FUI');
    } catch (err) {
      console.log('HOLA');
      if (err instanceof Error) catchedError = err;
    }

    expect(miAxios).toHaveBeenCalled(); //Verifica si se llame
    expect(miAxios).toHaveBeenCalledWith(url); //Verifica que se llamo pasando como args mi url
    expect(catchedError).toBeDefined();
    expect(catchedError).toHaveProperty('message');
    expect(catchedError.message).toEqual(errorMessage);
  });
});
