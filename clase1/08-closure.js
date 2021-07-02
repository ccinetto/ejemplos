let equipo = 'boca';

function miFuncion() {
  let count = 1;
  console.log(equipo);
  function contador() {
    console.log(equipo);
    count++;
    console.log(count);
  }
  const v = setInterval(contador, 2000);

  setTimeout(() => {
    clearInterval(v);
  }, 6000);
}

miFuncion();

// console.log(count);
