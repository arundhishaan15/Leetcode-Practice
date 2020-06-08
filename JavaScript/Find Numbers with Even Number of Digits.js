var findNumbers = function(nums) {
  count = 0;
  for (i=0; i<nums.length; i++) {
    if (nums[i].toString().length%2 == 0) {
      count++;
    }
  }
  return count;
}

findNumbers([12,345,2,6,7896])
