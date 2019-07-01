////////////////////////////////////     1     ////////////////////////////////////

console.log(2 + '2'); //22

console.log(2 - '2'); // 0



////////////////////////////////////    2    ////////////////////////////////////
let nums = [1, 2, 2, 3] //remove duplicates [1, 2, 3]
//no for loop, use only single line

console.log([...new Set(nums)]); //[...] is spread operator



////////////////////////////////////    3    ////////////////////////////////////

let func = function() {

  {
    let l = 'let';
    var v = 'var';
  }

  console.log(v);
  console.log(l);
}

func();
// print var
// Uncaught ReferenceError: l is not defined
// what if we also want the var to be block scoped, (like ES6 -> ES5, we change let to var)

let func = function() {

  {
    (function(){
      let l = 'let';
      var v = 'var';
    })();
  }

  console.log(v);
  console.log(l);
}

func();
//Uncaught ReferenceError: v is not defined

////////////////////////////////////    4    ////////////////////////////////////

console.log(5 < 6 < 7); //true
=> true < 7 => 1 < 7 => true


console.log(7 > 6 > 5); //false
=> true > 5 => 1 > 5 => false



////////////////////////////////////    5   ////////////////////////////////////

let a = () => arguments;

a('hi');

console.log(a('hi')); //

let a = function() {return arguments}
a('hi') // return 'hi'
//however in arrow function, we dont get 'hi' in the return arguments
// because arguments does not bind to the arrow function very well
// that is why we do not use arguments in arrow functions

//we can
let a = (...n) => {return n};



////////////////////////////////////    6    ////////////////////////////////////


let x = function() {
  return
    {message: 'hi'}
}

console.log(x()) //undefined
//because in function ,the return should not use line break
//we can change to this:
let x = function() {
  return {message: 'hi'}
}

////////////////////////////////////    7    ////////////////////////////////////

let profile = {
  name: 'techshith'
};

profile.age = 3
//How can we prevent user from adding new property
Object.freeze(profile);

//How can allow user to modify the property we already have. but still not adding new property
Object.seal(profile);

profile.name = 'interview';


////////////////////////////////////    8    ////////////////////////////////////

let profile = {
  name: 'tech',
  age:3
};

//we should be able to modify name, but not modify age, how to do ?
Object.defineProperty(profile, 'age'. {
  value:3,
  writeable:false
})


////////////////////////////////////    9    ////////////////////////////////////

console.log(Math.max());
//what is the answoer ?
-infinity

//max() method will find the least value as possible and to compare it with the max value



////////////////////////////////////    0    ////////////////////////////////////
////////////////////////////////////    0    ////////////////////////////////////
////////////////////////////////////    0    ////////////////////////////////////
////////////////////////////////////    0    ////////////////////////////////////
////////////////////////////////////    0    ////////////////////////////////////

////////////////////////////////////    0    ////////////////////////////////////
