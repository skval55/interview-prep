// add whatever parameters you deem necessary
function countPairs(arr, val) {
  const obj = makeNumberObj(arr, val);
  let count = 0;

  for (let num of arr) {
    if (obj[num] !== undefined && obj[num] !== num) count++;
  }

  return count / 2;
}
const makeNumberObj = (arr, val) => {
  const obj = {};

  for (let num of arr) {
    obj[val - num] = num;
  }

  return obj;
};
