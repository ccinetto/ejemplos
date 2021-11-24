import minimist from 'minimist';

/** Opcion1 : Solo pasar process.argv*/

const args = minimist(process.argv);

/** Opcion2 : Pasar alias y default values */
// const optionalArgsObject = {
//   alias: {
//     //Para pasar un alias a los argumentos que nos envian
//     h: 'help',
//     v: 'version',
//     x: 'mialiasPersonalizado',
//   },
//   default: {
//     //Si no nos envian el argumento, se setea por default
//     port: '6100',
//   },
// };
// const args = minimist(process.argv, optionalArgsObject);

console.log(args);
for (let i = 0; i < args.length; i++) {
  console.log(args[i]);
}
