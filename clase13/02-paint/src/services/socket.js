import socketIo from 'socket.io';
import { getLineHistory, addNewLine, resetHistory } from '../utils/lines';

export const initWsServer = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Nueva Conexion establecida!');

    //Le envio a cada nueva conexion el historial actual asi puede ver lo que ya se dibujo
    const history = getLineHistory();
    for (let aLine of history) {
      const newData = {
        line: aLine,
      };
      socket.emit('new-line', newData);
    }

    //Recibo una linea Nueva
    socket.on('new-line', (data) => {
      const { line } = data;
      addNewLine(line);
      // console.log(line);
      io.emit('new-line', data);
    });

    socket.on('reset', () => {
      resetHistory();
      io.emit('reset');
    });
  });

  return io;
};
