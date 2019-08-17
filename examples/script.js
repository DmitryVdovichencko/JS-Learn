	Number.prototype.plus = function(value){
		return this + value
	}
	Number.prototype.minus = function(value){
		return this - value
	}
	console.log(`Look I've added to Number new methods so (1).plus(2).minus(3) = ${(1).plus(2).minus(3)}`)

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

