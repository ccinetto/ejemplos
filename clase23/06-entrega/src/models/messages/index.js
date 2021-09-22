import { messageModel } from './dbSchema';
import { normalize, schema } from 'normalizr';

const author = new schema.Entity('author', {}, { idAttribute: 'email' });

const msge = new schema.Entity(
  'message',
  {
    author: author,
  },
  { idAttribute: '_id' }
);

const msgesSchema = new schema.Array(msge);

export const getAllMessages = async () => {
  try {
    //Si no se hace el map normalizr no le gusta la definicion del esquem
    let messages = (await messageModel.find()).map((aMsg) => ({
      _id: aMsg._id,
      author: aMsg.author,
      text: aMsg.text,
    }));

    let normalizedMessages = normalize(messages, msgesSchema);

    return normalizedMessages;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
};

export const addMessage = async (msge) => {
  let messageToSave = new messageModel(msge);
  let savedMessage = await messageToSave.save();
  return savedMessage;
};
