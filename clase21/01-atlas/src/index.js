import mongoose from 'mongoose';

const usuario = 'miUser';
const password = 'bokita123';

const myURI = `mongodb+srv://${usuario}:${password}@cluster0.6bf5k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const miFunc = (err) => {
    if(err)
        console.log(`ERROR CONEXION DB => ${err}`)          
    else
    console.log(" Mongoose is connected")
};

mongoose.connect(
        myURI, 
        { useNewUrlParser: true, useUnifiedTopology: true },
        miFunc
        )
