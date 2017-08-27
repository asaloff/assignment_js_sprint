// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    return Math.max.apply(null, array);
  },

  reversed: function(string){
    // your code here
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(string){
    // your code here
    var new_str = string.replace(/[.,\/#!$%\^&\*;:{}=\-`~()]/g,"").replace(/  /g, " ");

    var array = new_str.split(" ").map(function(word) {
                  return word.charAt(0).toUpperCase() + word.substring(1);
                });
    return array.join("_");
  },

  compareArrays: function(arr1, arr2){
    // your code here (replace the return)
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      for (var i = arr1.length - 1; i >= 0; i--) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
  },

  fizzBuzz: function(num){
    // your code here
    var arr = [num]

    for (var i = num; i > 1; i--) {
      arr.unshift(i - 1);
    };

    var newArr = arr.map(function(n) {
                  if (n % 3 === 0 && n % 5 === 0) {
                    n = "FIZZBUZZ";
                  } else if (n % 3 === 0) {
                    n = "FIZZ";
                  } else if (n % 5 === 0) {
                    n = "BUZZ"
                  }
                  return n;
                });

    return newArr;
  },

  myMap: function(arr, func){
    // your code here
    var newArr = arr.map(function(e) {
                   return func(e);
                 });

    return newArr;
  },

  primes: function(num){
    // your code here
    var arr = [num - 1]

    for (var i = num - 1; i > 2; i--) {
      arr.unshift(i - 1);
    };

    var primeArr = [];

    arr.map(function(n, index) {
      if (isPrime(n)) {
       primeArr.push(n);
      }
    });

    return primeArr;
  },
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}
