// Can also format it to be:
var countries = [
    "USA",
    "Germany",
    "China"
]

// Accessing elements of the Array
// Each element is in a fixed sequence, meaning the elements are in order
// and can be called by their position (indeing starts a zero)

countries[0]; // USA

// This is just like indexing characters from a string!
var myString = "ABCDEFG";
myString[0]; // "A"

// Reassignments
// You can reassign elements by accessing their index and then just reassigning it!

countries[0] = "France"
countries //["France", "Germany", "China"]

// Can't do this sort of reassignment with a string!
// This is the difference between immutable (strings) and mutable (Array)
// Though they are both sequences.

////////////////////////
// Mixed Data Types ///
//////////////////////

var mixed = [true, 20, "string"];

// Report back length
mixed.length // how many elements are in the array


////////////////////////////////////
// ----------------------------- //
// ------ ARRAY METHODS ------- //
// --------------------------- //
////////////////////////////////

// Let's discuss various methods available when working with Arrays in JS!

// Great Resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var myArr = ['one', 'two', 'three']
    // Adding and removing elements (push and pop)

// Removing last item
// pop last item and return it to a new variable
// (could also just pop it off without reassigning it to a new var)
var lastItem = myArr.pop()
lastItem; // "three"

// Adding to end of Array
myArr.push("new_item")
myArr; // ['one', 'two']

// Indexing the last item (indexing starts at zero):
myArr[myArr.length - 1] // two

// Can nest arrays as well:
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
matrix[0][0]; // 1



////////////////////////////////////
// ----------------------------- //
// ----- ARRAY ITERATION ------ //
// --------------------------- //
////////////////////////////////

// You can use a classic for loop
var arr = ['A', 'B', 'C']

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// A
// B
// C



// A nice way of iterating through arrays in javascript is to use a for loop
// Now you may think that a for/in is a great choice, but an issue that arises
// the for/in statement will return the name of your user-defined properties
// in addition to the numeric indexes. So it will look like you are just
// returning the indexes of the array.

var arr = ['A', 'B', 'C']
    // Don't do this!
for (letter in arr) {
    alert(letter);
}

// Because of this you will want to use a for/of loop. For example:
for (letter of arr) {
    alert(letter);
}

// But notice that it may be very common to issue a function for every element
// in an array, so common in fact, that an array has a special method for this.
// It's called the forEach method, check it out:

arr.forEach(alert);

// A B C

// Let's show another example:
function awesomeAdder(name) {
    console.log(name + " is awesome")
}

var topics = ["python", 'djang', 'science']

topics.forEach(awesomeAdder);