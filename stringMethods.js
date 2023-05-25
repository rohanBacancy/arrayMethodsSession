const separator = '-------------------------------------------------------'

// MDN Def
// The String object is used to store and manipulate text.

const str = 'Hi all!'
const str99 = new String('Hi all! another one')
console.log(`Type of ${str} is --> ${typeof str}`)
console.log(`Type of ${str99} is --> ${typeof str99}`)

// The string primitive is always parsed, i.e(string literal are treated as source code) , 
// where as the string object is evaluated into a single string .


var a = "12 + 12";
console.log('Primitive with eval', eval(a)); // 24
var b = new String("12 + 12");
console.log('Object with eval', eval(b)); // "12 + 12"
console.log('Object with eval', eval(b.valueOf())); // "12 + 12"


console.log('Are strings array fundamentally', Array.isArray(str))

// string length
console.log('String length', str.length)
console.log(separator)

const str2 = '\'a\'a\''
console.log('Escape character with single quote', str2)
console.log(separator)

console.log('Escape characters are not part of length of the string', str2.length)
console.log(separator)

console.log('Few special characters')
console.log('First line. \nSecond line. \nThird line.')
console.log(separator)
console.log('Tab between upcoming., one\ttwo')
console.log(separator)
const str5 = 'a\ta'
console.log('Length of special character is always 1 -> ', str5.length)

// toUpperCase()
const str3 = 'Riddham'
console.log(str3.toUpperCase())
console.log(separator)
// toLowerCase()
const str4 = 'Riddham'
console.log(str3.toLowerCase())
console.log(separator)

// Explore toLocaleUpperCase & toLocaleLowerCase


// slice
// The slice() method extracts a section of a string and 
// returns it as a new string, without modifying the original string.

const sliceStr = 'The quick brown fox jumps over the lazy dog.';
// Starting value is included, Ending isn't

console.log(sliceStr.slice(31));
// Expected output: "the lazy dog."

console.log(sliceStr.slice(4, 19));
// Expected output: "quick brown fox"

console.log(sliceStr.slice(-4));
// Expected output: "dog."

console.log(sliceStr.slice(-9, -5));
// Expected output: "lazy"
console.log(separator)


// replace

// The replace() method returns a new string with one, some, or all matches 
// of a pattern replaced by a replacement. The pattern can be a string or a RegExp, 
// and the replacement can be a string or a function called for each match. 
// If pattern is a string, only the first occurrence will be replaced. 
// The original string is left unchanged.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

// In the regex i stands for case insensitive matching
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

console.log(separator)

// Replace all occurrences
const str7 = 'Something with a lot of a s like crazy as';
console.log('Replace all a s,', str7.replaceAll('a', 'Rohan'))
console.log(separator)

// concat

// The concat() method concatenates the string arguments to the calling string 
// and returns a new string.

const str8 = 'Hello';
const str9 = 'World';

console.log(str8.concat(' ', str9));
// Expected output: "Hello World"

console.log(str9.concat(', ', str8));
// Expected output: "World, Hello"
console.log(`${str8}${str9}`)

console.log(separator)


// trim

// The trim() method removes whitespace from both ends of a string and returns 
// a new string, without modifying the original string.

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
console.log(separator)


// substring

// The substring() method returns the part of the string from the start index 
// up to and excluding the end index, or to the end of the string if no end index is supplied.

// Starting value is included, Ending isn't

const str10 = 'Mozilla';

console.log(str10.substring(1, 3));
// Expected output: "oz"

console.log(str10.substring(2));
// Expected output: "zilla"
console.log(separator)



// indexOf
// The indexOf() method returns the first index at which a given element can be found in the array, 
// or -1 if it is not present.



const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// Expected output: "The index of the 2nd "dog" is 52"

// Do not need to remember all methods
// You can visit mdn whenever needed
console.log('Equality', 1 === '1', 1 == '1', undefined == null, undefined === null)

// template literals


console.log(separator)
// `\`` === "`"; // true
// `\${1}` === "${1}"; // true

// console.log("string text line 1\n" + "string text line 2");
// // "string text line 1
// // string text line 2"

console.log(`string text line 1
string text line 2`);
// // "string text line 1
// // string text line 2"

// array
const arrByConstructor = new Array([])
const arrByShortForm = []

// simple for
const arrayOfNums = []
for (let val = 10; val <= 100; val+=10) {
    arrayOfNums.push(val)
}
console.log('Simple for', arrayOfNums);
console.log(separator)

// for in => index
const arrOfStrs = ['a', 'b', 'c', 'd']

for(index in arrOfStrs) {
    console.log('The index', index)
    // Not recommended for values
    console.log('The item', arrOfStrs[index])
}

console.log(separator)
// for of => values
for( item of arrOfStrs) {
    console.log('The item', item)
}
console.log(separator)

// simple for => good for creation of data/ better methods to iterate through arrays
// for in => if you need the index
// for of => if you need values
// forEach => not compatible with async/await will learn in later lectures (asynchronous JS)