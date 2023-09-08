// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (left >= right) break;
    if (arr[left] < 0 && arr[right] < 0) right--;
    else if (arr[left] > 0 && arr[right] > 0) left++;
    else if (arr[left] > 0 && arr[right] < 0) {
      right--;
      left++;
    } else if (arr[left] < 0 && arr[right] > 0) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      right--;
      left++;
    }
  }

  return arr;
}
