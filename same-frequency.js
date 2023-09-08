// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;

  const num1Obj = makeNumObj(num1);
  const num2Obj = makeNumObj(num2);

  for (let num in num1Obj) {
    if (num1Obj[num] !== num2Obj[num]) return false;
  }
  return true;
}
const makeNumObj = (number) => {
  const obj = {};

  for (let num of number) {
    obj[num] = obj[num] + 1 || 1;
  }

  return obj;
};
