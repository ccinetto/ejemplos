// //Lectura archivos Sin usar modulos
// //Se lee el archivo y se pasa al stdout para imprimir en consola

// const denoFile = await Deno.open('test.txt', { read: true });

// await Deno.copy(denoFile, Deno.stdout);

// denoFile.close();

// //Lectura archivos Con modulo

import { readFileStr } from 'https://deno.land/std@0.55.0/fs/read_file_str.ts';

const contenido = await readFileStr('test.txt');
console.log(contenido);
