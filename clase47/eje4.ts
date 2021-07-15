// const encoder = new TextEncoder();
// const data = encoder.encode('Hello Deno!');
// await Deno.writeFile('test.txt', data);

console.log(Deno.args);

import { writeFileStr } from 'https://deno.land/std@0.55.0/fs/write_file_str.ts';

await writeFileStr('test.txt', 'Mi contenido nuevo');
