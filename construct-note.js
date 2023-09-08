// add whatever parameters you deem necessary
function constructNote(mes, letters) {
  const mesObj = makeObj(mes);
  const letterObj = makeObj(letters);
  for (let letter in mesObj) {
    if (!letterObj[letter]) return false;
    if (mesObj[letter] > letterObj[letter]) return false;
  }
  return true;
}

const makeObj = (str) => {
  const obj = {};

  for (let letter of str) {
    obj[letter] = obj[letter] + 1 || 1;
  }
  return obj;
};
