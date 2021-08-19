import { on } from 'nodemon';
import socketIo from 'socket.io';

class SocketService {
  //Recibe el server http y crea el server de sockets
  initWsService(server) {
    if (!this.myWSServer) {
      this.myWSServer = socketIo(server);
      this.myWSServer.on('connection', (socket) => {
        console.log('Nueva conexion Hecha');

        socket.on('evento1', (data) => {
          console.log('ME LLEGO UN EVENTO1');
          console.log(data);
        });
      });
    }

    return this.myWSServer;
  }

  //devuelve el WSService
  getServer() {
    return this.myWSServer;
  }
}

export const socketService = new SocketService();
