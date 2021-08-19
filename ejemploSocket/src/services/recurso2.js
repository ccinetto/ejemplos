let recurso2 = [
  { id: 1, nombre: 'Cristian' },
  { id: 2, nombre: 'Juan' },
  { id: 3, nombre: 'Carlos' },
];

class Recurso2 {
  leer() {
    return recurso2;
  }

  agregar(nuevoItem) {
    const newData = {
      id: recurso2.length + 1,
      nombre: nuevoItem.nombre,
    };

    recurso2.push(newData);

    return newData;
  }

  eliminar(objectId) {
    recurso2 = recurso2.filter((anItem) => anItem.id !== objectId);
    return recurso2;
  }
}

export const recurso2Service = new Recurso2();
