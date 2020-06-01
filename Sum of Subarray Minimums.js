// Input: [3,1,2,4]
// Output: 17
// Explanation: Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.  Sum is 17.

var sumSubarrayMins = function(A) {
  sum=0;
  for (i=0; i < A.length; i++) {
    for (j=i+1; j < A.length+1; j++) {
      sum += Math.min(...A.slice(i,j));
    }
  }
  return sum;
};

sumSubarrayMins([3,1,2,4])