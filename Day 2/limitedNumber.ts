/*
    Limit a number with the range of 1 to 3. If the number is outside the range, try to get it inside the range. For example:

    4 >>> 1
    5 >>> 2
    10 >>> 1
    -1 >>> 2
    -2 >>> 1
    
*/
function limitNumberTo123(value: number) {
	const mv = value % 3;
	return mv !== 0 ? mv : 3;
}

export default limitNumberTo123;
