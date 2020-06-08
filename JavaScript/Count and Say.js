// # 1.     1
// # 2.     11
// # 3.     21
// # 4.     1211
// # 5.     111221

// # 111221
// # 111 22 1
// # 31 22 11
// # 312211

// First Method: Loops
var countAndSay = function(n) {
  
  req_array = ['1'];
  k=0;
  while (k<n) {
    for(let j=0; j<n; j++) {
      string = req_array[j];
      i = 0;
      counter = 1;
      val = "";
      while(i<string.length){
        if(string[i] == string[i+1]){
          counter++;
        } else {
          val = val + counter + string [i];
          counter = 1;
        }
        i++;
      }
      req_array[j+1] = val; 
    k++;
    }
  }
  return req_array[n-1];
}

countAndSay(5);

// Second Method: Recursion
var loop = function(n, string) {
// n: line number; string: a string to parse
  i = 0;
  counter = 1;
  val = ""
  while(i<string.length){
    if(string[i] == string[i+1]){
      counter++;
    } else {
      val = val + counter + string [i];
      counter = 1;
    }
    i++;
  }

  if(n>2){
    loop(n-1, val)
  }
  return val
}

final = loop(n, '1')
console.log(final)

