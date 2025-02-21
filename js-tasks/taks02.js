//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(" ");
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.split('T').join('U');
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
    return Math.min.apply(Math, list);
}

var max = function (list) {
    return Math.max.apply(Math, list);
}

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    let minimumValue = Math.min.apply(Math, arr);
    if (toReturn === "value") {
        return minimum;
    } else if (toReturn === "index") {
        return arr.indexOf(minimum);
    } else {
        console.log("Exception by team02;)");
    }
}

//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
    return i * 2;
}

//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
    return 2 * (n - 1);
}

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
    if (n < 0) {
        return n;
    } else if (n === 0) {
        return 0;
    } else if (n < 13) {
        return n - 1;
    } else {
        return n - 2;
    }
}

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
}

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}

//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number) {
  if (number < 0) return 0;

  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  
  return sum;
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
