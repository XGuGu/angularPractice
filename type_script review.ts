// What is Typescript ?
  It's a super set of the Javascript. Typescript has additional features:
    Strong typing. (optional)
    Object-oriented features (classes, interfaces...)
    Compile- time errors
    Great Tools (...)

// TypeScript --------> (Transpile) Javascript by the TypeScript compiler
  command: tsc test.ts ----> test.js

// Types :
  let a; // let a: any
  let a = 5; // let a: number

  number , boolean, string, any, number[], any[]

  enum Color { Red, Green, Blue };
  // define enum in Javascript:
  // var Color;
  // (function(Color) {
  //   Color[Color["Red"] = 0] = "Red";
  //   Color[Color["Green"] = 1] = "Green";
  //   Color[Color["Blue"] = 2] = "Blue";
  // });
  let backgroundColor = Color.Red;

// Type Assertion:
  let message;
  message = 'abc';
  let endsWithC = (<string>message).endsWith('c'); // true
  let alternativeWay = (message as string).endsWith('c'); //true

//Arrow function:
  let doLog = (message) => {
    console.log(message);
  }

// Interfaces:
   // use custom types in TypeScript

  // origin :
    let drawPoint = (x, y) => {
      //.....
    }

  // with interace:


    let drawPoint = (point: Point) => {
      //.......
    }

    //violate the Cohesion principle:
      interface Point {
        x: number,
        y: number,
        draw() => void
      }

// Classes:
  class Point {

    constructor(private x?: number, private y?: number) { // ? means the param is optional 一旦有一个optional，它右边的所有param都要optional
      // this.x = x;
      // this.y = y; will by default done by TypeScript
    }

    draw() {
      console.log('x:' + this.x +', y:' + this.y);
    }

    getDistance(another: Point) {
      //.....
    }
  }

  let point: Point = new Point(1, 2); //=> let point = new Point(1, 2);
  point.draw(); //  x: 1, y: 2

// Access Modifiers:
   public, private, protected
   public (by default)

//Properties:
  class Point {
    get X() {
      return this.x;
    }

    set X(value) { //X need to be upperCase
      this.x = value;
    }
  }

  let x = point.X ;
  point.X = 5;
  //a property internally is a method

  class Point {

    constructor(private _x?: number, private _y?: number) {
    }

    get x() {
      return this.x;
    }

    set x(value) { //X need to be upperCase
      this.x = value;
    }
  }

  let x = point.x ;
  point.x = 5;

// Module:
export class Point {}
import { Point } from '.....';
