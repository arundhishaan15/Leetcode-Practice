var climbStairs = function(n) {
    let series = Array(n+1).fill(0)
    // console.log(series)
    series[0] = 1
    series[1] = 1
    for(let i=2; i<=n; i++) {
        series[i] = series[i-1] + series[i-2]
        // console.log(series)
    }
    return series[n]
};

climbStairs(5)



