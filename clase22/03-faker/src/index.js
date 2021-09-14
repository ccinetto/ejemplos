import faker from 'faker';
import express from 'express';

const app = express();

const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

const devolverAleatorios = (req, res) => {
    const respuesta = [];

    for(let i =0; i<10; i++){
        respuesta.push({
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            color: faker.vehicle.color(),
            phone: faker.phone.phoneNumber('11-####-####'),
        })
    }
    res.json({
        data: respuesta
    });
}

app.get('/test', devolverAleatorios)

const puerto = 8080;
app.listen(puerto, () => console.log(`Escuchando puerto ${puerto}`))