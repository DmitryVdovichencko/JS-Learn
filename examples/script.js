	
	//расширяем прототип Number новыми методами
	Number.prototype.plus = function(value){
		return this + value
	}
	Number.prototype.minus = function(value){
		return this - value
	}
	console.log(`Look I've added to Number new methods so (1).plus(3).minus(3) = ${(1).plus(2).minus(3)}`)

	// how to join substrings with delimiter

	function joinSubStr(delim, ...subStr){
		return subStr.join(delim)
	}
	console.log(joinSubStr('*', '1', 'b', '1c'))

	// is String a palindrome
	function isPalindrome(str){
		str = `${str}`;
		return str.split('').reverse().join('') === str
	}
	console.log(isPalindrome('www'))

	//Fibonacci

	function fib(num){
		return num <= 1 ? n: fib(n-1) + fib(n-2)
	}
	//recursion is tooo slow so 
	function fibLoop(num){
		//set base values to 1
		let a = 1, b = 1
		// get sum
		// let c = a + b;
		// then if we reassign a = b b = c and get sum with c again, so we have next num in fibonacci seq
		// let's do it with loop
		for (let i = 3; i <= num; i++) {
			let c = a + b;
			a = b;
			b = c;
		}
		return b;

	}
console.log(`Fib for 77 is ${fibLoop(77)}`)

const strWithDelimiter = (delim,...strArr) => strArr.join(`${delim}`)
console.log(`String with delimiter is : ${strWithDelimiter('*','1','b','1c')}`);

// Tree structure

let tree = {
	valueNode: 3,
	next: [{
				valueNode: 1,
				next: null
			},
			{
				valueNode: 3,
				next: null
			},
			{
				valueNode: 2,
				next: null
			},
			{
				valueNode: 2,
				next: [
					{
						valueNode: 1,
						next: null
					},
					{
						valueNode: 5,
						next: null
					}
				]
			}]
};
// Sum of tree's nodes
// Recursion
const sumTree = (tree) => {
	let result;
	if(tree.next){
		tree.next
	}
}

