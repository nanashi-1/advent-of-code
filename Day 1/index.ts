import input from './input';

let splittedInput = input.split('\n\n'); // split the input by two new lines
let largest = 0; // the calories that the elf with the largest amount of calories is carrying

/*
    This will loop through all the elves and then loop through all their foods, then add all the calories they are carrying.
    
    This have a Big O notation of On^2, which is kind of bad, but I will try to improve this in the future.
*/
for (let splittedSplittedInput of splittedInput) {
	let sum = 0;

	for (let num of splittedSplittedInput.split('\n')) {
		sum += Number.parseInt(num);
	}

	if (sum > largest) largest = sum;
}

console.log(
	'The elf carrying the largest amount of calories carries %d calories',
	largest
);
