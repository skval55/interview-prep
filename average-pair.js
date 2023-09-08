// add whatever parameters you deem necessary
function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    const average = (arr[left] + arr[right]) / 2;
    if (average === target) return true;
    if (average > target) right--;
    if (average < target) left++;
  }
  return false;
}
