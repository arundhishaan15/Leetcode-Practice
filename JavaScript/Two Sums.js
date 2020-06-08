var twoSum = function(nums, target) {
    
    for (let i=0; i < nums.length - 1; i++) {
        
        let first_num = nums[i];
        
        for (let j=i+1; j < nums.length; j++) {
            if (target == first_num + nums[j]) {
              first_index = i;
              second_index = j;
            }
        }
    }
    
    return [first_index,second_index]
};