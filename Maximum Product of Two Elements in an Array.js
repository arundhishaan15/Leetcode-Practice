// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

// Right answer:
var maxProduct = function(nums) {
  nums.sort(function(a, b){return b-a});
  return (nums[0] - 1)*(nums[1] - 1);
};

maxProduct([3,4,5,2]);

// Bubble sort
var maxProduct = function(nums) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < nums.length; i += 1) {
      if (nums[i - 1] > nums[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
};

// c++ solution
// class Solution {
// public:
//     int maxProduct(vector<int>& nums) {
//         long max_1 = nums[0], max_2 = INT_MIN,max_index = 0;
//             for ( int i = 1; i < nums.size(); i++)
//             {
//                 if(max_1 < nums[i])
//                 {
//                 if(max_2 < max_1) max_2 = max_1;
//                   max_1 = nums[i];  
//                   max_index = i;
//                 }
                
//                 if(max_1 >= nums[i] && max_2 < nums[i] && max_index != i)
//                 {
//                     max_2 = nums[i];
//                 }
//             }
//         return (max_1-1)*(max_2-1);    
//         }
// };

