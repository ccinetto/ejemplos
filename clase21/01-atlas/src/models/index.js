import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  nombre:  String, // String is shorthand for {type: String}
  apellido: String,
  dni:   String,
});


export const User = mongoose.model('user', userSchema);
