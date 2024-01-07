function binarySearchRecursive(arr, target, start, end) {
  // Base case: if the start index is greater than the end index, the target is not in the array
  if (start > end) {
    return false;
  }

  // Calculate the middle index
  const mid = Math.floor((start + end) / 2);

  // If the middle element is the target, return true
  if (arr[mid] === target) {
    return true;
  } else if (arr[mid] < target) {
    // If the target is greater than the middle element, search the right half
    return binarySearchRecursive(arr, target, mid + 1, end);
  } else {
    // If the target is less than the middle element, search the left half
    return binarySearchRecursive(arr, target, start, mid - 1);
  }
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 7;

const isFound = binarySearchRecursive(sortedArray, targetElement, 0, sortedArray.length - 1);

if (isFound) {
  console.log(`The target element ${targetElement} is found in the array.`);
} else {
  console.log(`The target element ${targetElement} is not found in the array.`);
}
