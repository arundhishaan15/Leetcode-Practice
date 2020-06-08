// Input:  [1,2,3,4]
// Output: [24,12,8,6]

var productExceptSelf = function(nums) {
    let answer = [];
    for (i=0; i<nums.length; i++) {
      x = nums[i];
      nums.splice(i, 1);
      product = nums.reduce(function(a, b){return a * b}, 1);
      answer.push(product);
      nums.splice(i,0,x);
    }
    return answer;
};

productExceptSelf([1,2,3,4])