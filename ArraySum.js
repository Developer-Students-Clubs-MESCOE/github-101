class ArraySum {
	constructor () {
		console.log("Given an array of numbers find it's sum");
	}

	this.arraySum = (arr) => {
		// Hi contributer. Please write your code here.
		let sum = 0
		for (let i = 0; i < arr.length; i++)
			sum += arr[i]
		
		return sum
	}
}
