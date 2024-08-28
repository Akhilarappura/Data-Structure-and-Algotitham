
var majorityElement = function(nums) {
    
    const occurance = nums.reduce((acc, elem) => {
        acc[elem] = (acc[elem] || 0) + 1;
        return acc;
    }, {});
    
    let maxCount = 0;
    let maxElem ;
    
    for (const [elem, count] of Object.entries(occurance)) {
        if (count > maxCount) {
            maxCount = count;
            maxElem = elem;
        }
    }
    return maxElem
    };

    