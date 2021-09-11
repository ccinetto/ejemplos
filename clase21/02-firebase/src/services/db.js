import admin from 'firebase-admin';
import serviceAccount from '../../firebase.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

//Accedo a la DB de mi app
const db = admin.firestore();


export const UserDB = db.collection('users');