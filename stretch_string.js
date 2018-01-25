var input = 'hello';
var integers = [2, 4, 6, 8, 10];

console.log('Enter a string: \n');

console.log('Enter ' + input.length + ' integers: \n');

console.log('Printing stretched string: \n');

for (var i = 0; i < input.length; ++i) {
	for (var j = 0; j < integers[i]; ++j) {
		console.log(input[i]);
	}
}