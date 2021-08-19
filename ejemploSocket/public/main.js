console.log('ME ESTOY EJECUTANDO');

const socket = io.connect();

// setInterval(() => {
//   const obj = {
//     nombre: 'cristian',
//     date: new Date(),
//   };
//   socket.emit('evento1', obj);
// }, 1000);

socket.on('nuevoRecurso2', (data) => {
  alert('me llego un nuevo recurso 2');
  console.log(data);
});
