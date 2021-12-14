//Importante: Agregar flag --allow-read

//Metodo 1 Lectura
//Lectura archivos Sin usar modulos
//Se abre el archivo con permisos de lectura y se pasa al stdout para imprimir en consola

// const denoFile = await Deno.open('test.txt', { read: true });
// await Deno.copy(denoFile, Deno.stdout);
// denoFile.close();

//Metodo 2 Lectura
//Lectura archivos Con modulo

import { readFileStr } from 'https://deno.land/std@0.55.0/fs/read_file_str.ts';
const contenido = await readFileStr('test.txt');
console.log(contenido);
