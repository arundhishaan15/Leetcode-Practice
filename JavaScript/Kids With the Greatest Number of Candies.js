// candies = [2,3,5,1,3], extraCandies = 3
// add extraCandies with each item and check if its greater than max item
// [true,true,true,false,true]

var kidsWithCandies = function(candies, extraCandies) {
    let answer = [];
    for(i=0; i<candies.length; i++) {
       answer[i] = (candies[i]+extraCandies) >= Math.max(...candies);
    }
    return answer;
};

kidsWithCandies([2,3,5,1,3], 3);


