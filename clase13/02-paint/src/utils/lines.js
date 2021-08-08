let lineHistory = [];

export const getLineHistory = () => lineHistory;

export const addNewLine = (newLine) => {
  lineHistory.push(newLine);
};

export const resetHistory = () => {
  lineHistory = [];
};
