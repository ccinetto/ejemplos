import supertest from 'supertest';
import mongoose from 'mongoose';
import { MongoDB } from '../services/mongodb';
import { User, UsuarioI } from '../model/usuarios';
import ExpressServer from '../services/server';
import { expect } from 'chai';

describe('Ejemplos de tests', () => {
  let newMongo: any;
  let request: any;

  beforeAll(() => {
    jest
      .spyOn(mongoose, 'createConnection')
      .mockImplementationOnce(() => '123');

    newMongo = new MongoDB();
    request = supertest(ExpressServer);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('deberia devolver coneccion a mongo falsa', async () => {
    const connection = newMongo.getConnection();
    expect(connection).to.equal('123');
  });

  test('Deberia recibir un array vacio si no existen usuarios', async () => {
    const mockData: UsuarioI[] = [];
    jest
      .spyOn(User, 'find')
      .mockImplementationOnce(() => Promise.resolve(mockData) as any);

    const expectedResponse = {
      data: mockData,
    };
    const response = await request.get('/usuarios');
    expect(response.body).to.deep.equal(expectedResponse);
  });

  test('Deberia recibir un array con un usuario si mongoose me devuele un usuario', async () => {
    const mockData: UsuarioI[] = [
      {
        _id: '6193ddfbe20958cfaf36d4fa',
        nombre: 'juan2',
        email: 'juan2@gmail.com',
      },
    ];
    jest
      .spyOn(User, 'find')
      .mockImplementationOnce(() => Promise.resolve(mockData) as any);

    const expectedResponse = {
      data: mockData,
    };
    const response = await request.get('/usuarios');
    expect(response.body).to.deep.equal(expectedResponse);
  });

  test('deberia crear un usuario correctamente', async () => {
    jest.spyOn(User.prototype, 'save').mockResolvedValueOnce('ok');
    const body = { nombre: 'john', email: 'john@gmail.com' };
    const response = await request.post('/usuarios').send(body);

    expect(response.status).to.eql(200);

    const user = response.body.usuarioNuevo;
    expect(user).to.include.keys('nombre', 'email');

    expect(user.nombre).to.equal(body.nombre);
    expect(user.email).to.equal(body.email);
  });

  test('deberia recibir un error 400 al querer crear un usuario y mandar mal el body', async () => {
    const body = {};
    const response = await request.post('/usuarios').send(body);
    expect(response.status).to.eql(400);

    const expectedBody = {
      msg: 'invalid body params',
    };

    expect(response.body).to.deep.equal(expectedBody);
  });
});
