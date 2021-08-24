let productos = [
  {id:1, nombre: "lapiz", precio:200},
  {id:2, nombre: "lapiz2", precio:250},
  {id:3, nombre: "lapiz3", precio:260},
]

interface addProduct {
  nombre: string, 
  precio: number
}

interface Product {
  id: number,
  nombre: string, 
  precio: number
}

class Productos {

  find(id: number) {
    return  productos.find(aProduct => aProduct.id == Number(id))
  }
  
  get(id: number | undefined = undefined){
    if(id){
      return productos.filter(aProduct => aProduct.id == id)
    }
    return productos;
  }

  add(data: addProduct){

    const newItem = {
      id: productos.length +1,
      nombre : data.nombre,
      precio : data.precio,
    }

    productos.push(newItem);

    return newItem;
  }

  // update(id, data){

  // }

  delete(id: number){
    productos = productos.filter(aProduct => aProduct.id !== Number(id))
    return productos;
  }
}

export const productsPersistencia = new Productos();