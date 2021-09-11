
import { readAllUsers, readSpecificUser } from "./crud/leer";
import { addUser } from "./crud/agregar";
import { updateUser } from "./crud/update";
import { deleteUser } from "./crud/borrar";



// readAllUsers().then((data) => console.log(data));
// readSpecificUser('lragozzine').then((data) => console.log(data));

// const data = {
//     "first": "Liam",
//     "last": "Ragozzine",
//     "address": "133 5th St., San Francisco, CA",
//     "birthday": "05/13/1990",
//     "age": "30"
// };

// addUser(data)


const dataNueva = {
    "first": "Liam3",
    "last": "Ragozzine3",
}

const key = 'miKey-41829';
// updateUser(key,dataNueva).then(data => console.log(data))


deleteUser(key);
    
