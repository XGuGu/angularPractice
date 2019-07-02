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
