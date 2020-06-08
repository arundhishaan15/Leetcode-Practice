// Wrong answer

// var subtractProductAndSum = function(n) {
//   unitDigit = n % 10;
//   tens= (n - (Math.floor(n/100) * 100) - unitDigit)/10;
//   hundred= Math.floor(n/100);
//   product = unitDigit * tens * hundred;
//   sum = unitDigit + tens + hundred;
//   return product - sum;
// };

// subtractProductAndSum(234);

// Right Answer

var subtractProductAndSum = function(n) {
  output = [];
  sNumber = n.toString();
  sum=0;
  product=1;
  for (var i = 0; i < sNumber.length; i++) {
    sum += (+sNumber.charAt(i));
    product *= (+sNumber.charAt(i));
  }
  return product - sum;
};

subtractProductAndSum(234);

