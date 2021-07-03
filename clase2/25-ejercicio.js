class Mensaje {
  mostrar(mensaje, retardo) {
    try {
      // const mensajeErroneo = mensaje == undefined || mensaje == null;

      const mensajeErroneo = mensaje ?? 'si';

      if (mensajeErroneo == 'si' && !retardo)
        return console.log('defina el mensaje');

      if (retardo && typeof retardo != 'number')
        throw new Error('retardo no es numerico');

      setTimeout(
        () => {
          console.log(mensaje.toString().trimEnd());
        },
        retardo ? retardo : 1000
      );
    } catch (err) {
      console.log(err.mensaje ?? err);
    }
  }
}

const msg = new Mensaje();

msg.mostrar(null);
msg.mostrar();
msg.mostrar(0);
msg.mostrar(false);
msg.mostrar('pepe');
msg.mostrar(4);
msg.mostrar('             HOLAAAAAAAAAAAAAAA              ');
