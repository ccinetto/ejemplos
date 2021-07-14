const jugador = {
  nombre: 'Franco',
  appelido: 'Soldano',
  goles: 2500,
  equipos: ['Real Madrid', 'Juventus', 'Boca Juniors'],
  jugadorSelecion: true,
};

jugador[Symbol.iterator] = function () {
  const values = Object.values(this);
  let index = -1;

  return {
    next: () => {
      index++;
      const done = index >= values.length;
      console.log('CONTEXTO', index, values[index]);
      return {
        value: done ? undefined : values[index],
        done,
      };
    },
  };
};

for (let aValue of jugador) {
  console.log('RESULTADO ==>', aValue);
}
