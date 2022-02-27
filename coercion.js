// Please try to guess, test, and then understand following examples: with binary operators

// binary + operator

// Any operation with "NaN" returns "NaN"; null is 0; undefinded is NaN, true is 1, false is 0, +string is concat
console.log(null + undefined);
// NaN (0 + NaN = NaN)
console.log(null + true);
// 1 (0 + 1 = 1)
console.log(null + false);
// 0 (0 + 0 = 0)
console.log(null + 3);
// 3 (0 + 3 = 3)
console.log(null + NaN);
// NaN (0 + NaN = NaN)
console.log(null + "hello");
// nullhello ("null" + "hello" = "nullhello")
console.log(undefined + true);
// NaN (NaN + 1 = NaN)
console.log(undefined + false);
// NaN (NaN + 0 = NaN)
console.log(undefined + 5);
// NaN (NaN + 5 = NaN)
console.log(undefined + NaN);
// NaN (NaN + NaN = NaN)
console.log(undefined + "hello");
// undefinedhello ("undefined" + "hello" = "undefinedhello")
console.log(true + false);
// 1 (1 + 0 = 1)
console.log(true + 2);
// 3 (1 + 2 = 3)
console.log(true + NaN);
// NaN
console.log(true + "hello");
// truehello ("ture" + "hello")
console.log(false + 4);
// 4 (0 + 4 = 4)
console.log(false + NaN);
// NaN ("false" + "NaN")
console.log(false + "hello");
// falsehello ("false" + "hello")
console.log(5 + 3);
// 8 (5 + 3 = 8)
console.log(5 + NaN);
// NaN
console.log(5 + "hello");
// 5hello ("5" + "hello")
console.log("hello" + NaN);
// helloNaN ("hello" + NaN)

// unary - operator

console.log(null - undefined);
// NaN (0 - NaN = NaN)
console.log(null - true);
// -1 (0 - 1 = -1)
console.log(null - false);
// 0 (0 - 0 = 0)
console.log(null - 3);
// -3 (0 - 3 = 3)
console.log(null - NaN);
// NaN (0 - NaN = NaN)
console.log(null - "hello");
// NaN (0 - NaN = NaN)
console.log(undefined - true);
// NaN (NaN - 1 = NaN)
console.log(undefined - false);
// NaN (NaN - 0 = NaN)
console.log(undefined - 5);
// NaN (NaN - 5 = NaN)
console.log(undefined - NaN);
// NaN (NaN - NaN = NaN)
console.log(undefined - "hello");
// NaN (NaN - NaN = NaN)
console.log(true - false);
// 1 (1 - 0 = 1)
console.log(true - 2);
// -1 (1 - 2 = -1)
console.log(true - NaN);
// NaN (1 - NaN = NaN)
console.log(true - "hello");
// NaN (1 - NaN = NaN)
console.log(false - 4);
// -4 (0 - 4 = -4)
console.log(false - NaN);
// NaN (0 - NaN = NaN)
console.log(false - "hello");
// NaN (0 - NaN = NaN)
console.log(5 - 3);
// 2 (5 - 3 = 2)
console.log(5 - NaN);
// NaN (Any operation with NaN returns NaN)
console.log(5 - "hello");
// NaN (5 - NaN = NaN)
console.log("hello" - NaN);
// NaN (NaN - NaN = 0)

// The same is with binary * operator, binary / operator and binary % operator as only + operator is concating, the others try to operate and if it is not a number, it returns NaN

// binary == operator

// IF THE VALUE IS EQUAL, IT RETURNS TRUE
// (nulle is only == undefined), (undefined is only == null), (NaN is not equal to anything)
// (Boolean type is NOT equal to Number type), (Boolean type is NOT equal to String type)

console.log(null == undefined); // true
console.log(null == true); // false
console.log(null == false); // false
console.log(null == 3); // false
console.log(null == NaN); // false
console.log(null == "hello"); // false
console.log(undefined == true); // false
console.log(undefined == false); // false
console.log(undefined == 5); // false
console.log(undefined == NaN); // false
console.log(undefined == "hello"); // false
console.log(true == false); // false
console.log(true == 2); // false
console.log(true == NaN); // false
console.log(true == "hello"); // false
console.log(false == 4); // false
console.log(false == NaN); // false
console.log(false == "hello"); // false
console.log(5 == 3); // false
console.log(5 == NaN); // false
console.log(5 == "hello"); // false
console.log("hello" == NaN); // false

// binary === operator
// If the type and the valure ARE NOT EQUAL then === IS NOT TRUE !!

console.log(null === undefined); // false
console.log(null === true); // false
console.log(null === false); // false
console.log(null === 3); // false
console.log(null === NaN); // false
console.log(null === "hello"); // false
console.log(undefined === true); // false
console.log(undefined === false); // false
console.log(undefined === 5); // false
console.log(undefined === NaN); // false
console.log(undefined === "hello"); // false
console.log(true === false); // false
console.log(true === 2); // false
console.log(true === NaN); // false
console.log(true === "hello"); // false
console.log(false === 4); // false
console.log(false === NaN); // false
console.log(false === "hello"); // false
console.log(5 === 3); // false
console.log(5 === NaN); // false
console.log(5 === "hello"); // false
console.log("hello" === NaN); // false

// binary > operator (The same is for < operator )
// true = 1; false = 0; undefined and String are NaN, Any operation with NaN returns NaN!

console.log(null > undefined); // false
console.log(null > true); // false (0 > 1 --> false)
console.log(null > false); // false (0 > 0 --> false)
console.log(null > 3); // false (0 > 3 --> false)
console.log(null > NaN); // false
console.log(null > "hello"); // false (0 > NaN --> false)
console.log(undefined > true); // false (NaN > 1 --> false)
console.log(undefined > false); // false (NaN > 0 --> false)
console.log(undefined > 5); // false (NaN > 5 --> false)
console.log(undefined > NaN); // false (NaN > Nan --> false)
console.log(undefined > "hello"); // false (NaN > Nan --> false)
console.log(true > false); // true (1 > 0 --> true)
console.log(true > 2); // false (1 > 2 --> false)
console.log(true > NaN); // false
console.log(true > "hello"); // false (1 > NaN --> false)
console.log(false > 4); // false (0 > 4 --> false)
console.log(false > NaN); // false
console.log(false > "hello"); // false (0 > NaN --> false)
console.log(5 > 3); // true
console.log(5 > NaN); // false
console.log(5 > "hello"); // false (5 > NaN --> false)
console.log("hello" > NaN); // false
