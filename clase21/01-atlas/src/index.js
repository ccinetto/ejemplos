import mongoose from 'mongoose';
import { User } from './models';

const usuario = 'miUserName';
const password = 'miPassword';
const dbName = 'midbName';
const clusterUrl = 'cluster0.u0pne.mongodb.net'

const myURI = `mongodb+srv://${usuario}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`

const miFunc = (err) => {
    if(err)
        console.log(`ERROR CONEXION DB => ${err}`)          
    else
    console.log(" Mongoose is connected")
    User.find().then((data) => console.log(data));
};

mongoose.connect(
        myURI, 
        { useNewUrlParser: true, useUnifiedTopology: true },
        miFunc
        )
