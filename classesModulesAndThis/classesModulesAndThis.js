// npm init -y -> to generate a node.js repo
// "type": "module" in package.json

import { sayName } from './modulesHolder1.js'
// sayName('Rohan')


// in node.js top level object is global
// in browser top level object is window
// top level object contains default environment specific utilities
// ex -> setInterval, setTimeout
// nodejs specific -> fs, path, os, crypto
// browser specific -> sessionStorage, localStorage, document

// This keyword in detail

// The value of this depends on in which context it appears: function, class, or global.
// With object
// const test = {
//     prop: 42,
//     func: function() {
//       return this.prop;
//     },
//   };
  
// console.log(test.func());

// Expected output: 42

// With function

// function getThis() {
//     return this;
//   }
  
//   const obj1 = { name: "obj1" };
//   const obj2 = { name: "obj2" };
  
//   obj1.getThis = getThis;
//   obj2.getThis = getThis;
  
//   console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
//   console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }


//  Callbacks are typically called with a this value of undefined 
// (calling it directly without attaching it to any object)

// function logThis() {
//     console.log(this);
// }
  
//   [1, 2, 3].forEach(logThis);

//  Some APIs allow you to set a this value for invocations of the callback.

// [1, 2, 3].forEach(logThis, { name: 'Rohan' });


// this with arrow function [IMP]
// Arrow functions have a lexical this binding, 
// meaning that they inherit the this value from the enclosing scope where they are defined. 
// This behavior is different from regular functions, 
// which have a dynamic this binding that depends on how they are called.

// const obj = {
//     name: 'Rohan',
//     sayHello: function() {
//         // this
//         console.log('Inside of parent function which wraps',this)
//       setTimeout(() => {
//         console.log(`Hello, ${this.name}!`);
//       }, 1000);
//     }
//   };
  
//   obj.sayHello(); // Outputs: Hello, John!

  
// [1, 2, 3].forEach(() => console.log(this));