import moment from 'moment';

export const formatMessages = (data) => {
  const { username, text } = data;
  return {
    username,
    text,
    time: moment().format('h:mm a'),
  };
};
