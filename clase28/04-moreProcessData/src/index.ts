/**
 * con process.stdout podemos escribir en la consola usando el proceso principal
 */
const miCustomConsoleLog = (mensaje: any): void => {
  process.stdout.write(mensaje + '\n');
};

miCustomConsoleLog('ACCESO A VARIABLES DE ENTORNO DEL SISTEMA');
miCustomConsoleLog(JSON.stringify(process.env));

miCustomConsoleLog('EXEC PATH => Ruta donde esta el ejecutable de nodejs');
miCustomConsoleLog(process.execPath);
