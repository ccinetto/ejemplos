const array = ['a**2', '**', '3**3', '4**', '4**5', '8**2', '4*=5'];

const salida1 = array
  //filtro aquellos que no tengan el **
  .filter((aValue) => aValue.includes('**'))
  //recorro cada uno de los valores restantes del array
  .map((aValue) => {
    //A cada string lo convierto en un array usando la funcion split
    //'6**2' ===> ['6','2']
    //'**' =====> ['','']
    const output = aValue.split('**');

    //si no tengo 2 elementos en el array o tengo elementos vacios en el array tiro null
    if (output.length != 2 || output.includes('')) return null;

    if (isNaN(output[0] ** output[1])) {
      return null;
    }

    return output[0] ** output[1];
  });

console.log(salida1);
