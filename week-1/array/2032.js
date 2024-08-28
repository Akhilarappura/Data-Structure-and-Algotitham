

let nums1 = [3,1,6], nums2 = [2,3], nums3 = [1,2]


var twoOutOfThree = function(nums1, nums2, nums3) {
  

function countUniqueOccurrences(nums, counts) {
  const uniqueValues = new Set(nums);
  uniqueValues.forEach(value => {
    counts[value] = (counts[value] || 0) + 1;
  });
}

// Create an object to count occurrences of each value
const valueCounts = {};

// Count the unique occurrences in each nums
countUniqueOccurrences(nums1, valueCounts);
countUniqueOccurrences(nums2, valueCounts);
countUniqueOccurrences(nums3, valueCounts);

// Filter values that appear in at least two nums
const commonValues = Object.keys(valueCounts).filter(key => valueCounts[key] >= 2).map(Number);

return  commonValues

    
};

let res =twoOutOfThree(nums1,nums2,nums3)
console.log(res);