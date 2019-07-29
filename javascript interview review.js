//ES6 new features:

  // 1. Default Parameters
      var getAccounts = function(limit = 10) {
        ...
      }
  // 2. Interpolation in string
      var name = `Your name is ${first} ${last}.`
      var url = `http://localhost:3000/api/messages/${id}`

  //3. Multi line strings
      var roadPoem = `Then took the other, as just as fair,
          And having perhaps the better claim
          Because it was grassy and wanted wear,
          Though as for that the passing there
          Had worn them really about the same,`  //utilize the backticks

  // 4. Arrow function
      $('.btn').click((event) =>{
        this.sendData()
      })

  // 5. Promises
      // Let’s consider a rather trivial example of a delayed asynchronous execution with setTimeout():
      setTimeout(function(){   console.log('Yay!') }, 1000)  //ES5

      var wait1000 =  new Promise((resolve, reject)=> {
        setTimeout(resolve, 1000)
      }).then(()=> {
        console.log('Yay!')
      }) //ES6

  // 6. Let and Const
      both let and const are block scoped
      let is a new var
      const prevents re-assigning

  // 7. Classes in ES6
      Class interitance
      ChildClassName.prototype = new ParentClass();
      ChildClassName.prototye.constructor = ChildClassName;

      // an example of ES6 class syntax and ES5 equivalent
      class Vehicle {

        constructor (name, type) {
          this.name = name;
          this.type = type;
        }

        getName () {
          return this.name;
        }

        getType () {
          return this.type;
        }

      }
      let car = new Vehicle('Tesla', 'car');
      console.log(car.getName()); // Tesla
      console.log(car.getType()); // car

      // ES5

      function Vehicle (name, type) {
        this.name = name;
        this.type = type;
      };

      Vehicle.prototype.getName = function getName () {
        return this.name;
      };

      Vehicle.prototype.getType = function getType () {
        return this.type;
      };
      var car = new Vehicle('Tesla', 'car');
      console.log(car.getName()); // Tesla
      console.log(car.getType()); // car

      //interitance
      // ES5
      function Car (name) {
        Vehicle.call(this, name, ‘car’);
      }
      Car.prototype = Object.create(Vehicle.prototype);
      Car.prototype.constructor = Car;
      Car.parent = Vehicle.prototype;
      Car.prototype.getName = function () {
        return 'It is a car: '+ this.name;
      };
      var car = new Car('Tesla');
      console.log(car.getName()); // It is a car: Tesla
      console.log(car.getType()); // car

      //ES6
      class Car extends Vehicle {

        constructor (name) {
          super(name, 'car');
        }

        getName () {
          return 'It is a car: ' + super.getName();
        }

      }
      let car = new Car('Tesla');
      console.log(car.getName()); // It is a car: Tesla
      console.log(car.getType()); // car

// What is difference between "==" and "===" ?
  "==" checks equality only. "===" also checks the type

//What is difference between null and undefined ?
  `undefined means a variable has been declared but has not yet been assigned a value.
  On the other hand, null is an assignment value. It can be assigned to a variable as
   a representation of no value. Also, undefined and null are two distinct types: undefined
   is a type itself (undefined) while null is an object.`


//What is promise
A promise is an object that may produce a single value some time in the future:
either a resolved value, or a reason that it's not resolved.A promise may be in
one of 3 possible states: fulfilled, rejected, or pending.

The Promise object is used for asynchronous coputations. A Promsise represents a value which may be available now, or in the future, or never.
first, it is an object, that is, with other javascript object usage, no different.
second, it as an proxy, between the asynchoronous and the callback function.

proxy is a design pattern,allows for object level access control by acting as a pass through entity or a placeholder obejct.

//what is three status of Promise?
1.pending: initial state, neither fulfilled nor rejected.
2.fulfilled/resolved: meaning that the operation completed successfully.
3.rejected: meaning that the operation failed.

//What is data type in JS ?
Number, string, boolean, undefined, null, Objects and Symbols

// 1.0+2.0 === 3.0 ?
should return false;

// webgarden and webfarm
one server for webgarden, serveal server webfarm

// what is the use of void(0)?
to prevent the page from refreshing and parameter "zero" is passed while calling .

//to throw exception?
try ,catch

// copy of Object
shallow copy:
function (old) {
  var newObj = {};
  for(var i = )
}
deep copy:


// Object.keys() & Object getOwnProperty difference   enumerable !
a = ['hello', 'world'];
Object.keys(a) // [0,1]
Object.getOwnProperty(a) //[0, 1, length]

// web worker

// DOM ?
Document Object Model is a programming interface for HTML, XML, and SVG documents. It provides a structured representation of the document as a tree,
The DOM defines methods that allow access to the tree, so that they can change the document structure, style and content. The DOM provedes a representation of the document
as a structured group of nodes and objects, possessing various properties and methods. Nodes can also have event handlers attached to them, and once an event is
triggered, the event handlers get executed.


DOM is an interface to let javascript to manipulate the HTML page.

var foo = documents.getElementById("foo");

if (foo.hasChildNodes()) {
  foo.removeChild(foo.childNodes[0]);
}

The example removes the first child node inside the element with tthe id 'foo' if foo has child nodes.

Node.CloneNode()
it takes a boolean value as a parameter indicating whether or not to clone a child node at the same time. The default is false, that is, the child node is not cloned.
var dupNode = node.cloneNode(deep);
克隆会复制所有的属性 方法，但和event相关的都不会复制

NodeList, HTML Collection !!

document node
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()

// how to add elements at the start/end of an array
var myArr = [1,2,3,4,5];
myArr = ['start', ...myArr];
myArr = [...myArr, 'end'];
myArr = ['start', ...myArr, 'end'];

// how do you create a private variable in JS ?
function secretVar() {
  var priva = 'secret code';
  return function() {
    return priva;
  }
}

var getSecret = secretVar;
console.log(getSecret)  //cant get the var, need getSecret()


// what is the output ?
var num = 4;
function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 3;
    console.log(num);
  }
  inner();
}
outer(); //3

//what is the output ?
console.log(typeof (typeof 1));
//--> (type of number)
//--> (type of string)

//delegation
If there are many elements inside one parent, and you want to handle events on them, don't bind handlers to each element.
Instead, bind the single handler to their, and get the child from event target

prevent
p.addEventListener('click', function(event) {
  event.stopPropagtion();
})
p.addEventListener('click', function(event) {
  event.stopImmediatePropagtion(); //stop every event !
})

// difference map(), reduce(), filter() ?
map() creates a new array with the result of calling a provided function on every ele in array

var officers = [
  {id:20, name: 'wwww'},
  {id:24, name:'qeqweqw'},
  {id:56, name:'werdaf'},
  {id:88, name:'qweqsssss'}
]

function fetchId(arr) {
  return arr.map((ele) => {
    return ele.id;
  })
}
