// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let str1Idx = 0;

  for (let letter of str2) {
    if (letter === str1[str1Idx]) {
      str1Idx++;
    }
  }
  if (str1Idx === str1.length) return true;
  else return false;
}
