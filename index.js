function printArray(arr) {
  console.log("Array:", arr);
}

let array = [5, 12, 7, 25, 18, 3];

printArray(array);

function addTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 10);
  }
  return newArr;
}

let updatedArray = addTen(array);
console.log("Updated array:", updatedArray);

function convertToNearestEven(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      resultArr.push(arr[i] + 1);
    } else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

let resultArray = convertToNearestEven(array);
console.log(
  "Array with odd numbers converted to nearest even numbers:",
  resultArray,
);

function getNumbersDivisibleByTwo(arr) {
  var newArra = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArra.push(arr[i]);
    }
  }
  return newArra;
}

let newArra = getNumbersDivisibleByTwo(array);
console.log("New array with numbers divisible by 2:", newArra);

function sumOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Sum of all numbers in the array:", sum);
}

sumOfArray(array);

function sumOfOddAndEvenNumbers(arr) {
  let sumOdd = 0;
  let sumEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sumOdd += arr[i];
    } else {
      sumEven += arr[i];
    }
  }

  console.log("Sum of odd numbers:", sumOdd);
  console.log("Sum of even numbers:", sumEven);
}

sumOfOddAndEvenNumbers(array);
