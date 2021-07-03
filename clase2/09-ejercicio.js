const func = (obj) => {
  setInterval(() => console.log(Object.entries(obj)), 2000);
};

const obj1 = {
  nombre: 'Franco',
  appelido: 'Soldano',
  goles: 2500,
  equipos: ['Real Madrid', 'Juventus', 'Boca Juniors'],
  jugadorSelecion: true,
};

func(obj1);
