// Hoisting

// JavaScript Hoisting refers to the process whereby the interpreter appears 
// to move the declaration of functions, variables or classes 
// to the top of their scope, prior to execution of the code.

// console.log(v)
// var v = 'Anish'

// How does hoisting work with different methods of defining stuff in JS,

// 1. Being able to use a variable's value in its scope before the line it is declared.
// ("Value hoisting") 
// - Ex -> Any function declared with function keyword

// doPrint()

// function doPrint() {
//   console.log('doPrint printed.')
// }

// Not arrow functions only functions created with function keyword
// console.log(doPrint2)

// var doPrint2 = () => {
//   console.log('doPrint2 printed.')
// }

// 2. Being able to reference a variable in its scope before the line it is declared, 
// without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
// - Ex -> Any declaration with var keyword

// console.log(a)
// var a = 10
// console.log(a)

// NOTE -: ONLY DECLARATION IS HOISTED NOT INITIALIZATION

// console.log(withFunction)

// var withFunction = () => {
//   console.log('function declared with var.')
// }

// withFunction()

// non-hoisting
// 3. The declaration of the variable causes behavior changes in its scope 
// before the line in which it is declared.

// const x = 1;
// {
//   console.log(x); // ReferenceError
//   const x = 2;
// }

// let x = 1;
// {
//   console.log(x); // ReferenceError
//   let x = 2;
// }

// let x = 1;
// {
//   console.log(x);
//   x = 2;
// }

//   let x = 1;
//   // Main scope
  
//   if (x === 1) {
//     // 1st level nesting
//     // let x = 2;
  
//     {
//       // 2nd level nesting
  
//     //   let x = 3
//       console.log(x);
//     }
//   }
  
  // console.log(x);
  


// QUESTION ---->
// var a
// console.log(a)
// {
//   {
//     {
//       a = 10
//     }
//   }
// }
// console.log(a)

// Tricky examples

// var foo;
// var foo = 5
// console.log('foo:', foo)
// var bar = 10;
// var bar;
// console.log('bar:', bar)
// var baz = 10
// var baz = 12
// console.log('baz:', baz)

// Note -:
// Re-declaration doesn't affect previous assignment because it's hoisted on top

// function foo() {
//     function bar() {
//       return 5
//     }
//     return bar()
//     function bar() {
//       return 10
//     }
//   }
//  console.log(foo());


// Note -:
// Hosting is done in order (last function definition (Same name) overrides all other prior ones), 


// REST operator
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
//   }
  
//   console.log(sum(1, 2, 3));
//   // Expected output: 6
  
//   console.log(sum(1, 2, 3, 4));
//   // Expected output: 10

// partially using rest operator
// function myFun(a, b, ...manyMoreArgs) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("manyMoreArgs", manyMoreArgs);
//   }
  
//   myFun("one", "two", "three", "four", "five", "six");

// NOTE --->
// A function definition can only have one rest parameter, 
// and the rest parameter must be the last parameter in the function definition.

// REST with objects

// const person = {
//     pName: 'John',
//     age: 30,
//     city: 'New York',
//     country: 'USA',
//     occupation: 'Developer'
//   };
  
//   const { pName, age, ...details } = person;
  
//   console.log(pName);     // Output: John
//   console.log(age);      // Output: 30
//   console.log(details);  // Output: { city: 'New York', country: 'USA', occupation: 'Developer' }


// Destructuring

// const people = [{
//     pName: 'John',
//     age: 30,
//     city: 'New York',
//     country: 'USA',
//     occupation: 'Developer'
//   },{
//     pName: 'Rohan',
//     age: 24,
//     city: 'Ahmedabad',
//     country: 'India',
//     occupation: 'Developer'
//   }];

// //   console.log('Array of names', people.map(({ pName, age, city, ...restOfTheProp }) => restOfTheProp))
//   const [ , any2 ] = people
//   console.log('second item', any2)




// Spread operator

// The spread (...) syntax allows an iterable, such as an array or string, 
// to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. 
// In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs 
// to the object being created.

// NOTE ->>>
// Spread syntax looks exactly like rest syntax. 
// In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, 
// while rest syntax collects multiple elements and "condenses" them into a single element.


// function sum(x, y, z) {
//     return x + y + z;
//   }
  
//   const numbers = [1, 2, 3];
  
//   console.log(sum(...numbers));
// //   Expected output: 6

// const newNumbers = [...numbers, 99, 98];
// console.log(newNumbers)
// const person = {
//     name: 'Rohan',
//     age: 24
// }
// const person2 = {...person, newProperty: 'newPropertyValue'}
// console.log(person2)


// SPREAD operator SHALLOW copies object or array

// const dynamicPropName = 'dynamicPropName'

// const obj = {
//     name: 'Rohan',
//     age: 24,
//     loves: 'typescript',
//     nestedObj: {
//         name: 'abc'
//     }
// }
// const newObj = {...obj, 'normalProp': 'abc'}
// console.log(newObj)


// Term Shadow clone & deep clone

// ['js', 'ts']
// obj.loves
// shadowClonedObj.loves
// const obj = {
//     pName: 'Rohan',
//     age: 24,
//     loves: ['JS', 'TS']
// }
// const shadowClonedObj = {...obj}

// shadowClonedObj.pName = 'Abc'
// // console.log('shadowClonedObj', shadowClonedObj)
// // console.log('obj', obj)
// // Amending non-primitives inside a non-primitives created using shadow clone
// shadowClonedObj.loves.push('java')
// console.log('shadowClonedObj', shadowClonedObj)
// console.log('obj', obj)

// Deep clone

// const obj = {
//     pName: 'Rohan',
//     age: '24',
//     loves: ['JS', 'TS']
// }
// const deepClonedObj = JSON.parse(JSON.stringify(obj))
// deepClonedObj.pName = 'Abc'
// // console.log('deepClonedObj', deepClonedObj)
// // console.log('obj', obj)
// // Amending non-primitives inside a non-primitives created using shadow clone
// deepClonedObj.loves.push('java')
// console.log('deepClonedObj', deepClonedObj)
// console.log('obj', obj)



// const newFunc = (str, arr, num) => {
//     console.log({ str, arr, num })
    
// }

// newFunc('Aarti', ...[1, 2, 3], 55)

// const parts = ["shoulders", "knees"];
// const lyrics = ["head", ...parts, "and", "toes"];
// const lyrics = ["head", parts, "and", "toes"].flat();
// const lyrics = ["head", parts, "and", "toes"].flatMap(e => e);
// console.log(lyrics)
//  ["head", "shoulders", "knees", "and", "toes"]

  // REAL EXAMPLE OF FLATMAP


//   [{
//     id: '1',
//     name: 'Pen',
//     variance: [{
//         id: '1',
//         value: 'Red',
//         type: 'color'
//     },
//     {
//         id: '2',
//         value: 'Blue',
//         type: 'color'
//     }]
//   }, 
//   {
//     id: '1',
//     name: 'Car',
//     variance: []
//   }]


//   Red pen
//   Blue pen
//   Car

  
//   For all the products, Generating unique ProdId/VarianceId combination,
//   Separating products with multiple variance as a different item,
//   Attaching variance to separated products.
//   const fixedProducts = (products = [], promocode) => products
//     .flatMap(({ variance, ...product }) => {
//       if (variance?.length) {
//         return variance.map((productVariance) => ({
//           ...product,
//           discountedPrice: promocode?.isPercentage
//             ? ((100 * productVariance.value) * ((100 - promocode.amount) / 100)) / 100
//             : undefined,
//           fixedProductId: `${product.productId}/${productVariance.id}`,
//           variance: productVariance,
//         }));
//       }
  
//       return {
//         ...product,
//         fixedProductId: product.productId,
//         variance: undefined,
//         discountedPrice: promocode?.isPercentage
//           ? ((100 * product.price) * ((100 - promocode.amount) / 100)) / 100
//           : undefined,
//       };
//     });

    // pen
    // red
    // blue
    // [ { pen, allProp, red }, { pen, allProp, blue },  { car, allProp, undefined }]

