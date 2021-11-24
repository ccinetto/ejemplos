//https://www.npmjs.com/package/ts-node
/*
npm install -D typescript
npm install -D ts-node
*/

// importing mongoClient to connect at mongodb
import { MongoClient } from 'mongodb';

import { PersonaRepository } from './repositories/PersonaRepository'
import { Persona } from './entities/Persona';

import minimist from 'minimist'

ejecutarCmds()

async function ejecutarCmds() {
    try {
        console.log('Contectando a la Base de datos...')
        /* ---------------------------------------------------------------- */
        /*              Conexión a la base de datos warriors                */
        /* ---------------------------------------------------------------- */
        // connecting at mongoClient
        const connection = await MongoClient.connect('mongodb://localhost',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = connection.db('datos');
        /* ---------------------------------------------------------------- */
        console.log('Base de datos conectada')

        const argv = minimist(process.argv.slice(2))
        let {cmd,id,nombre,apellido,DNI} = argv
        //console.log(tipo,cmd,id,nombre,valor)

        cmd = cmd? cmd.toLowerCase() : ''
        /* -------------------------------------------------------- */
        /*          Creación de un repositorio Persona              */
        /* -------------------------------------------------------- */
        console.log('Instanciando el Repository personas')
        const repositoryPersona = new PersonaRepository(db,'personas');
        let resultPersona

        switch(cmd) {
            case 'buscar':
                if(id) console.log(await repositoryPersona.findOne(id))
                else console.log(await repositoryPersona.find())
                break

            case 'agregar':
                const persona = new Persona(nombre,apellido,DNI);
                resultPersona = await repositoryPersona.create(persona);
                console.log(`Persona inserted with ${resultPersona ? 'success' : 'fail'}`)
                break
                    
            case 'reemplazar':
                resultPersona = await repositoryPersona.update(id,new Persona(nombre,apellido,DNI));
                console.log(`Persona updated with ${resultPersona ? 'success' : 'fail'}`)
                break
                            
            case 'borrar':
                resultPersona = await repositoryPersona.delete(id);
                console.log(`Persona deleted with ${resultPersona ? 'success' : 'fail'}`)
                break

            case 'count':
                const count = await repositoryPersona.countOfPersonas();
                console.log(`the count of Personas is ${count}`)
                break                
    
            default:
                console.log('comando no válido:',cmd)
        }

        await connection.close()
        console.log('Base de datos desconectada')
    }
    catch(error) {
        console.log(error)
    }
}
