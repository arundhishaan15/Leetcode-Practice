var findMin = function(nums) {
  min=nums[0];
  for (i=0; i<nums.length; i++) {
      if (nums[i+1]<nums[i]) {
          min = nums[i+1];
          return min;
      }
  }
  return min;  
};
