import { UserDB } from "../services/db";
import { between } from '../utils';

/**
 * 
 * Para agregar un usuario, primero creamos una referencia a un documento con una key que nosotros querramos
 * para ello usamos el metodo doc de la coleccion que estamos usando y le pasamos la key del documento
 * Aca estamos usando la funcion beetween para generar ids aleatorios
 * una vez creado esa referencia al documento nuevo, le agregamos la data usando el metodo set
 */
export const addUser = async (data) => {
    try{
        const randomKey = `miKey-${between(0,300000)}`;
        console.log(randomKey);         
        const doc = UserDB.doc(randomKey);     //vamos a crear un documento cuya key sea (algo generico)
        await doc.create(data)                     //a ese documento le metemos data en formato json
        console.log("salio todo bien!")        
    }
    catch(err){
        console.log("ERROR");
        console.log(err);
    }
}