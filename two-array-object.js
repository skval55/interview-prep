// add whatever parameters you deem necessary
function twoArrayObject(arrKeys, arrVals) {
  const obj = {};
  for (let i = 0; i < arrKeys.length; i++) {
    if (arrVals[i]) obj[arrKeys[i]] = arrVals[i];
    else obj[arrKeys[i]] = null;
  }

  return obj;
}
