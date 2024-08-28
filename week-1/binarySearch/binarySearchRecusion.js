let binarySearchRecursive = (arr, target, left = 0, right = arr.length - 1) => {
    if (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            return binarySearchRecursive(arr, target, mid + 1, right);
        } else {
            return binarySearchRecursive(arr, target, left, mid - 1);
        }
    }
    return -1;
};

let arr = [1, 2, 3, 4, 5, 6];
let res = binarySearchRecursive(arr, 9);
console.log(res);
