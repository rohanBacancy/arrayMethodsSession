const separator = '-------------------------------------------------------'
console.log(separator)

// Syntactical difference between normal and arrow function
function normalFunction(param) {
    console.log('normal function statement', param)
}
normalFunction(1)

// ECMAScript 2015 or ES6
const arrowFunction = (param) => {
    console.log('arrow function statement', param)
}

arrowFunction(1)

// Syntax to declare and initialize an array
const stringsArr = ['John', 'Ringo', 'Paul', 'George']
const stringsArr2 = ['Rohan', 'Dipak']
const numberArr = [4, 5, 6, 3, 2]
const nestedArr = [4, 5, [1, 2, 5, [9, [12]]], 6]

// Use-case -:
// Storing a collection of multiple items under a single variable name
// and has members for performing common array operations.

console.log(`Type of arr ${stringsArr} is -: ${typeof stringsArr}`)
// Primitive data types are number, string, boolean, NULL, undefined.... Non-primitive data types is the object. 
// The JavaScript arrays and functions are also objects
console.log(separator)

// Property -> length

const lengthOfStringsArr = stringsArr.length
console.log(`Length is -: ${lengthOfStringsArr}`)
console.log(separator)
// length - 1 === lastIndex

// For loop -> Not an array method

for (let i = 0; i <= stringsArr.length - 1; i++) {
    const element = stringsArr[i];
    console.log(`Element at index ${i} is -> ${element}`)
}
console.log(separator)

// forEach
// The forEach() method executes a provided function once for each array element.
// forEach(FUNCTION)

stringsArr.forEach((item, index) => {
    console.log(`Item at index ${index} is : ${item}`)
})

console.log(separator)

// map
// The map() method creates a new array populated with the results of calling a provided function 
// on every element in the calling array.

const newArrayAfterMapping = numberArr.map((num, index, wholeArray) => {
    return num * 2
});
console.log('Original array -> ', numberArr);
console.log('Result array map -> ', newArrayAfterMapping);
console.log(separator)

// filter
// The filter() method creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.

const resultFilter = stringsArr.filter(word => word.length > 4);
console.log('Original array -> ', stringsArr);
console.log('Result array filter -> ', resultFilter);
console.log(separator)


// includes
// The includes() method determines whether an array includes a certain value among its entries, 
// returning true or false as appropriate.
const includesRingo = stringsArr.includes('Ringo');
const includesRohan = stringsArr.includes('Rohan');
console.log('includesRingo -> ', includesRingo);
console.log('includesRohan -> ', includesRohan);
console.log(separator)

// find
// The find() method returns the first element in the provided array that satisfies the provided testing 
// function. If no values satisfy the testing function, undefined is returned.
const firstNumGreaterThan4 = numberArr.find(num => num > 4);
console.log('firstNumGreaterThan4 -> ', firstNumGreaterThan4);
console.log(separator)

// flat
// The flat() method creates a new array with all sub-array elements concatenated into it 
// recursively up to the specified depth.
console.log('FLAT example')
const arr1 = [0, 1, 2, [3, 4]];
console.log('flat example 1', arr1.flat());

const arr2 = [0, 1, 2, [3, 4], [99, [94, 95, [93]]]];
console.log(arr2.flat(2));
console.log(arr2.flat(3));
console.log(separator)
console.log('Array length test -> ', [0, 1, 2, [3, 4], [99, [94, 95, [93]]]].length)


// flatMap
// The flatMap() method returns a new array formed by applying a given callback 
// function to each element of the array, and then flattening the result by one level. 
// It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), 
// but slightly more efficient than calling those two methods separately.
//FLATTENS THE RESULT BY ONE LEVEL

const arr3 = [1, 2, 1];

const result = arr3.map((num) => (num === 2 ? [2, [2, 2]] : 1)).flat(2);
console.log('Flat map result', result);
console.log(separator)


// every
// The every() method tests whether all elements in the array pass the test implemented by the provided 
// function. It returns a Boolean value.
const arr4 = [1, 30, 39, 29, 10, 13];
console.log('Every result -: ', arr4.every((currentValue) => currentValue < 29));

// some
// The some() method tests whether at least one element in the array passes the test 
// implemented by the provided function. It returns true if, in the array, it finds an element 
// for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

console.log('Some result -: ', arr4.some((currentValue) => currentValue < 2));
console.log(separator)


// slice
// The slice() method returns a shallow copy of a portion of an array into a new array object 
// selected from start to end (end not included) where start and end represent the index of items in that array. 
// The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log('Slice output -:');
console.log(animals.slice(2));
// Item at passed starting index will be included in the output array
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Item at passed ending index will not be included in the output array
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
console.log(separator)



// concat
// The concat() method is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.

const concatedArray = stringsArr2.concat(stringsArr);
console.log('Concated array is -> ', concatedArray)
console.log(separator)


// reduce
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, 
// in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.

const numberArr2 = [5,4,3,2,1]
const resultReduce = numberArr2.reduce((acc, item) => {
    return acc + item
}, 0)
console.log('Reduce result -> ', resultReduce)
console.log(separator)

// dry run
// It  acc val  totalPassesAsAccToNextIteration  
// 1 - 0 - 5 = 5
// 2 - 5 - 4 = 9
// 3 - 9 - 3 = 12
// 4 - 12 - 2 = 14
// 5 - 14 - 1 = 15


// isArray() 
// static determines whether the passed value is an Array.
const obj = {
    0: 'Rohan'
}
const arr = [false, undefined]
console.log('Differentiating between array and object by isArray')
console.log(Array.isArray(obj))
console.log(Array.isArray(arr))
console.log(separator)

const stackArr = ['Rohan']
// push
// New length of an array
console.log('Push : ',stackArr.push('Ringo'))
console.log('Stack ATM', stackArr)

// pop
// Popped item
console.log('Pop : ', stackArr.pop())
console.log('Stack ATM', stackArr)
console.log(separator)


// List of people who are male developers -: 

// ['<name> is <age> years old', '<name> is <age> years old']
const people = [
    { cid: "0", name: 'John', gender: 'M', age: 20, isDev: false  },
    { cid: "1", name: 'James', gender: 'M', age: 22, isDev: true  },
    { cid: "2", name: 'Jenny', gender: 'F', age: 24, isDev: false  },
    { cid: "3", name: 'Sophia', gender: 'F', age: 18, isDev: true  },
    { cid: "4", name: 'Rohan', gender: 'M', age: 24, isDev: true  },
    false
]

const filteredPeople = 
people.filter((person) => person.gender === 'M' && person.isDev).map(item => `${item.name} is ${item.age} years old.`);
console.log('My ans -> ', filteredPeople)

const anishsAnswer = people.map((person) => {
    return (person.gender === 'M' && person.isDev === true && `${person.name} is ${person.age} years old`)
}).filter((person)=> {return person !== false});

console.log('Anishs ans -> ', filteredPeople)