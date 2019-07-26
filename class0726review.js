// Babel and Webpack
  What is transpiler?

  A transpiler reads code written in one language and produces the
  equivalent code in another.

  We need transpilers so that our es6 code compiles into the dense
  JavaScript code that browser like. Babel is one of the most popular
  es6 transpilers.

  Babel is one of the transpilers.

  Using webpack allows us to create an environment that transforms
  es6 code with babel.

  It combines multiple modules into one js file to reduce errors and
  resources on the client-side.

  Shipping with a development server, it gives us live code updating for free


// Template Literals
  back ticks
  可以随意换行

// Array.from
  let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
  };

  // ES5
  var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
  // ES6
  let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

// Symbol
let s = Symbol();
type of s // 'symbol'

// Set and Map
const s = new Set();
s.add()...

equality check , NaN 只能添加在set一次，even thoght NaN ！== NaN
Keys(), Values(), Entries(), ForEach() // methods for traverse

Map is similar to object, but also a set of key-value pairs, but the "key" is not limited to strings, various types of values can be keys

set， has，get
