
let minimumDifference = function(nums, k) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let minDiff = Infinity;
    
    // Iterate through the array starting from index k - 1
    for (let i = k - 1; i < nums.length; i++) {
        // Calculate the difference between the highest and lowest score in the current window
        let diff = nums[i] - nums[i - k + 1];
        minDiff = Math.min(minDiff, diff);
    }
    
    return minDiff;
};

// Example usage:
let nums = [9, 4, 1, 7];
let k = 2;
let res = minimumDifference(nums, k);
console.log(res); // Output will be 2
