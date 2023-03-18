import input from './input';

function part1() {
	const splittedInput = input.split('\n\n'); // split the input by two new lines
	let largest = 0; // the calories that the elf with the largest amount of calories is carrying

	/*
    This will loop through all the elves and then loop through all their foods, then add all the calories they are carrying.
    
    This have a Big O notation of On^2, which is kind of bad, but I will try to improve this in the future.
*/
	for (const splittedSplittedInput of splittedInput) {
		let sum = 0;

		for (const num of splittedSplittedInput.split('\n')) {
			sum += Number.parseInt(num);
		}

		if (sum > largest) largest = sum;
	}

	return largest;
}

function part2() {
	const splittedInput = input.split('\n\n'); // split the input by two new lines
	const topThree = [0, 0, 0]; // the total calories of the top three

	for (const splittedSplittedInput of splittedInput) {
		let sum = 0;

		for (const num of splittedSplittedInput.split('\n')) {
			sum += Number.parseInt(num);
		}

		// push the new largest then remove the smallest which is at index 0
		if (sum > topThree[2]) {
			topThree.push(sum);
			topThree.shift();
		} else if (sum > topThree[1]) {
			topThree[0] = topThree[1];
			topThree[1] = sum;
		} else if (sum > topThree[0]) topThree[0] = sum;
	}

	return topThree.reduce((t, c) => t + c, 0);
}

// print for part 1
console.log('Part 1:');
console.log(
	'The elf carrying the largest amount of calories carries %d calories',
	part1()
);

// print for part 2
console.log('Part 2:');
console.log('The total of the top three is %d calories', part2());
