function merge(left, right) {
  let leftInd = 0;
  let rightInd = 0;
  const mergedArr = [];

  while (leftInd < left.length && rightInd < right.length) {
    if (left[leftInd] <= right[rightInd]) {
      mergedArr.push(left[leftInd]);
      leftInd++;
    } else {
      mergedArr.push(right[rightInd]);
      rightInd++;
    }
  }

  if (leftInd === left.length) {
    while (rightInd < right.length) {
      mergedArr.push(right[rightInd]);
      rightInd++;
    }
  } else {
    while (leftInd < left.length) {
      mergedArr.push(left[leftInd]);
      leftInd++;
    }
  }

  return mergedArr;
}

export function mergeSort(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
