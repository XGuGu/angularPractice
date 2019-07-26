class Animal {

  constructor (name) {
    this.name = name;
  }

  yell() {
    console.log('ooooo');
  }


}

class Dog extends Animal {

  constructor (name, color) {
     super(name);
     this.color = color;
   }

  bark() {
    console.log('woof');
  }
}


var d1 = new Dog('mike', 'yellow');
// console.log(Object.keys(d1));


add(2,5);
add(2)(5);

function add(a, b) {
  if (b === undefined) {
    return (x) => {
      return a + x;
    }
  }
  return a + b;
}

// console.log(add(2)(5));


function filter(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      res.push(arr1[i]);
    }
  }
  return res;
}

// console.log(filter([1,2,3,4], [3,4]));

//aaabbaaaa => 'a3b2a4'
function compress(str) {
  let res = '';
  let count = 1;

  for(let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      res += str[i] + count;
      count = 1;
    }
  }

  return res;
}

// console.log(compress('aaabbaaaabbcccccc'));

function groupCount(listArr) {
  let res = {};
  for (let i = 0; i < listArr.length; i++) {
    let person = listArr[i];
    if (res[person.user] === undefined) {
      res[person.user] = 1;
    } else {
      res[person.user] += 1;
    }
  }
  return res;
}
var list = [
  {user:'Mike', age:19},
  {user:'Mike', age:19},
  {user:'Mike', age:19},
  {user:'Dave', age:19},
  {user:'Tom', age:19},
  {user:'Tom', age:19}
];
// console.log(groupCount(list));

function deleteDup(list) {
  let set = new Set();
  for(let i = 0; i < list.length; i++) {
    person = list[i].user;
    set.add(person);
  }
  return Array.from(set);
}
// console.log(deleteDup(list));


function reverseSentence(str) {
  let res = ''
  if (str[str.length - 1] === '.') {
    return str;
  }
  else {
    for (let i = str.length - 1; i >= 0; i--) {
      res += str[i];
    }
    return res;
  }
}

// let sentence1 = 'abcdefghijklmn.'
// let sentence2 = 'abcdefghijklmn'
// console.log(reverseSentence(sentence1));
// console.log(reverseSentence(sentence2));

function majorityEle(arr) {
  let store = {};
  let half = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (store[ele] === undefined) {
      store[ele] = 1;
    } else {
      store[ele] += 1;
      if (store[ele] > half) {
        return ele;
      }
    }
  }
}
let arr = [1,2,1,2,1,11,1,1,3,1,1,2,2,3,1];

// console.log(majorityEle(arr));


function longestEvenLengthWord(str) {
  let words = str.split(' ');
  let res;
  let longestLen = 0;
  for (let i = 0; i < words.length; i++) {
    let len = words[i].length;
    if (isEven(len) && len > longestLen) {
      res = words[i];
      longestLen = len;
    }
  }
  return res === undefined ? '00' : res;
}

function isEven(length) {
  return length % 2 === 0;
}

// test code:
let sentence = 'time to write great code'
let sentence1 = 'write great'

// console.log(longestEvenLengthWord(sentence)); //time
// console.log(longestEvenLengthWord(sentence1)); //00

// var s1 = 'abc';
// var s2 = new String('abc');
//
// console.log(s1 === s2);
// console.log(s1 == s2);

// Singleton

//happy number
// A happy number is a number defined by the following process:
// starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1

// example: 19 is a happy number
// 1^2 + 9^2 = 82;
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

function isHappy(num) {
  let number = num.toString();
  let sum = 0;
  while (sum != num) {
    debugger
    sum = 0;
    for (let i = 0; i < number.length; i++) {
      sum += Math.pow(number[i], 2);
    }
    if (sum == 1) {
      return true;
    }
    number = sum.toString();
  }
  return false;
}

console.log(isHappy(19));
