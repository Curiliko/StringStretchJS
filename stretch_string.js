// Example user input
var input = 'hello';
var integers = [2, 4, 6, 8, 10];

// Get user-inputted string
console.log('Enter a string: \n');

// Prompt user to enter number of strings depending on length of input
console.log('Enter ' + input.length + ' integers: \n');

console.log('Printing stretched string: \n');

// 'Stretch' user's string depending on integer input
for (var i = 0; i < input.length; ++i) {
	for (var j = 0; j < integers[i]; ++j) {
		console.log(input[i]);
	}
}
