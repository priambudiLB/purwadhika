/*
Materi #2 "Strings & Numbers"
Created on 26/08/2018
By Priambudi Lintang Bagaskara
*/

//--------------------------------------------------------------
//STRINGS 1
var x = 'Halo Dunia';

console.log(x.length);              // 10
console.log(x.indexOf('Dunia'));    // 5
console.log(x.substr(5, 3));        // Dun
console.log(x.slice(5, 8));         // Dun
console.log(x.split(' '));          // Array(2) ["Halo", "Dunia"] 
console.log(x.split(' ')[0]);       // Halo

//--------------------------------------------------------------
//STRINGS 2
var x = 'halo';
var y = 'DUNIA';
var z = 12345;

console.log(x.toUpperCase());       // HALO
console.log(y.toLowerCase());       // dunia
console.log(x.replace('ha', 'mi'))  // milo
console.log(x.replace(/ha/g, 'mi')) // milo
console.log(z.toString())           // 12345
console.log(typeof(z.toString()))   // string

//-------------------------------------------------------------
//NUMBERS
var a = 3.14;
var b = 3;
var c = 123e5;                      // 123 x 105
var d = 123e-5;                     // 123 x 10-5
var e = 999999999999999;            // 15x
var f = 9999999999999999;           // 16x
var g = 0.2 + 0.1;                  // 0.3
var h = (0.2 * 10 + 0.1 * 10) / 10; // 3

//-------------------------------------------------------------
//CONVERT STRINGS TO NUMBERS
let a1 = parseInt('123');
let b1 = parseFloat('123');
let c1 = parseInt('1234.5678');
let d1 = parseFloat('1234.5678');
let e1 = parseInt('Halo Dunia');
let f1 = parseFloat('Halo Dunia');

console.log(a)                      // 123
console.log(b)                      // 123
console.log(c)                      // 1234
console.log(d)                      // 1234.5678
console.log(e)                      // NaN
console.log(f)                      // NaN

//-------------------------------------------------------------
//ARITHMETIC OPERATORS
var usiaAndi = 40;
var usiaBudi = 20;
console.log(usiaAndi * usiaBudi);   // 800
console.log(usiaAndi / usiaBudi);   // 2
console.log(usiaAndi + usiaBudi);   // 60
console.log(usiaAndi - usiaBudi);   // 20
console.log(usiaAndi % usiaBudi);   // 0

//-------------------------------------------------------------
//MATH OBJECTS
// Basic
console.log(Math.PI);               // 3.141592653589793
console.log(Math.abs(-4.7));        // 4.7
console.log(Math.pow(8, 2));        // 64
console.log(Math.sqrt(64));         // 8
console.log(Math.cbrt(8));          // 2

// Round, Ceil, Floor
console.log(Math.round(4.7));       // 5
console.log(Math.round(4.4));       // 4
console.log(Math.floor(4.7));       // 4
console.log(Math.ceil(4.4));        // 5

// Random, Max, Min
console.log(Math.random());         // (random number)
console.log(Math.max(1,3,5));       // 5
console.log(Math.min(1,3,5));       // 1

//-------------------------------------------------------------
//DATE OBJECTS
let a2 = new Date()

console.log(a2.getFullYear())       // 2018
console.log(a2.getMonth())          // 7
console.log(a2.getDate())           // 26
console.log(a2.getDay())            // 0
console.log(a2.getHours())          // 14
console.log(a2.getMinutes())        // 6
console.log(a2.getSeconds())        // 54
console.log(a2.getMilliseconds())   // 674
console.log(a2.getTime())           // Get time (ms since Jan 1, 1970)
