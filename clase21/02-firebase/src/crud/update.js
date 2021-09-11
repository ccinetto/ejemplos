import { UserDB } from "../services/db";

export const updateUser = async (id,data) => {
    await UserDB.doc(id).update(data);
    console.log('salio bien');
    return readSpecificUser(id);
}